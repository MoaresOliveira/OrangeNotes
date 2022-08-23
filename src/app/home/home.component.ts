import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      title: 'Back-end',
      percent: 50
    },
    {
      title: 'Front-end',
      percent: 75
    },
    {
      title: 'UX Design',
      percent: 25
    },
    {
      title: 'Data Science',
      percent: 7
    },
    {
      title: 'Database',
      percent: 50
    },
    {
      title: 'Cloud Computing',
      percent: 75
    },
    {
      title: 'DevOps',
      percent: 25
    },
    {
      title: 'Design Thinking',
      percent: 7
    },
    {
      title: 'Data Structure',
      percent: 50
    },
    {
      title: 'Agile',
      percent: 75
    },
    {
      title: 'Cyber Security',
      percent: 25
    },
    {
      title: 'Accessibility',
      percent: 7
    },
    {
      title: 'Mobile Development',
      percent: 7
    },
    {
      title: 'Blockchain',
      percent: 7
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
