import { Component, OnInit } from '@angular/core';

import * as Rellax from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public rellaxHeader: Rellax;

  constructor() { }

  ngOnInit(): void {
    this.rellaxHeader = new Rellax('.rellax-header');
  }

}
