import { Component, OnInit } from '@angular/core';
import { Hir } from 'src/app/models/hir';

@Component({
  selector: 'app-hirek',
  templateUrl: './hirek.component.html',
})
export class HirekComponent implements OnInit {

  model: Hir;

  constructor() { }

  ngOnInit() {
  }
  create(){
    
  }
}
