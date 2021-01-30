import { Component, OnInit } from '@angular/core';

export interface KapcsolatModel{
  nev: string;
  email: string;
  targy: string;
  uzenet;
}

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
})
export class KapcsolatComponent implements OnInit {
  linkText: string;
  model: KapcsolatModel = {
    email : '',
    nev: '',
    targy: '',
    uzenet: ''
  }
  constructor() { }

  ngOnInit() {
  }
  getMailText(){
    return "dupi.tolna@gmail.com?subject=" + encodeURIComponent(this.model.targy) + "&body=" + encodeURIComponent(this.model.uzenet);
  }
}
