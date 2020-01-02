import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
  private tiles = [
    { text: 'Settings', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Verification', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Staff', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Candidates', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  ngOnInit() {
  }

}
