import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
