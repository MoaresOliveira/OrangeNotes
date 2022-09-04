import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextareaAutosize]',
})
export class TextareaAutosizeDirective {
  @Input() minRows = 2;
  @Input() maxRows = 4;

  private input: HTMLTextAreaElement;
  private offsetHeight = 0;
  private readonly avgLineHeight = 20;

  constructor(private element: ElementRef) {
    this.input = this.element.nativeElement;
  }

  @HostListener('input')
  onInput(): void {
    if (this.offsetHeight <= 0) {
      this.offsetHeight = this.input.scrollHeight;
    }

    this.input.rows = this.minRows;

    const rows = Math.floor(
      (this.input.scrollHeight - this.offsetHeight) / this.avgLineHeight
    );

    const rowsCount = this.minRows + rows;

    this.input.rows = rowsCount > this.maxRows ? this.maxRows : rowsCount;
  }
}
