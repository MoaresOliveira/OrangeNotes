import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsContentComponent } from './options-content.component';

describe('OptionsContentComponent', () => {
  let component: OptionsContentComponent;
  let fixture: ComponentFixture<OptionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
