import { Component, OnInit } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  navList = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}