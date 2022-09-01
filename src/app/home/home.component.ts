import { Component, OnInit } from '@angular/core';
import { Collection } from '../interfaces/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections: Collection[] = [
    {
      id: 1,
      name: 'Back-end',
      percent: 50
    },
    {
      id: 2,
      name: 'Front-end',
      percent: 75
    },
    {
      id: 3,
      name: 'UX Design',
      percent: 25
    },
    {
      id: 4,
      name: 'Data Science',
      percent: 7
    },
    {
      id: 5,
      name: 'Database',
      percent: 50
    },
    {
      id: 6,
      name: 'Cloud Computing',
      percent: 75
    },
    {
      id: 7,
      name: 'DevOps',
      percent: 25
    },
    {
      id: 8,
      name: 'Design Thinking',
      percent: 7
    },
    {
      id: 9,
      name: 'Data Structure',
      percent: 50
    },
    {
      id: 10,
      name: 'Agile',
      percent: 75
    },
    {
      id: 11,
      name: 'Cyber Security',
      percent: 25
    },
    {
      id: 12,
      name: 'Accessibility',
      percent: 7
    },
    {
      id: 13,
      name: 'Mobile Development',
      percent: 7
    },
    {
      id: 14,
      name: 'Blockchain',
      percent: 7
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
