import { Component, OnInit } from '@angular/core';

import * as Rellax from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public rellaxHeader: Rellax;

  ngOnInit(): void {
    this.rellaxHeader = new Rellax('.rellax-header');
  }

}
