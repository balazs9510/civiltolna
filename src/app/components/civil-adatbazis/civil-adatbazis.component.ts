import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationType, OrderDirection, SearchParameterBase } from 'src/app/models/search-parameter';
import { Szervezet } from 'src/app/models/szervezet';
import { SzervezetService } from 'src/app/services/szervezet.service';

@Component({
  selector: 'app-civil-adatbazis',
  templateUrl: './civil-adatbazis.component.html',
})
export class CivilAdatbazisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
