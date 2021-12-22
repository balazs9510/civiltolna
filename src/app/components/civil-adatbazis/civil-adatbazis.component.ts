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
  searchParamters: SearchParameterBase = {
    order: [{ property: 'azonosito', direction: OrderDirection.Desc }],
    filterClient: [
      {
        filterProperty: 'azonosito',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'nev',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'varos',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'cim',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'szemely',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'elerhetoseg',
        type: OperationType.Contains,
      }
    ]
  };
  $szervezetek: Observable<Szervezet[]>;
  p: any;
  constructor(private service: SzervezetService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.$szervezetek = this.service.getItems(this.searchParamters);
  }
}
