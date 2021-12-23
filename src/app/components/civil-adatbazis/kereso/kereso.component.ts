import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { OperationType, OrderDirection, OrderProperty, SearchParameterBase } from 'src/app/models/search-parameter';
import { Szervezet } from 'src/app/models/szervezet';
import { SzervezetService } from 'src/app/services/szervezet.service';

@Component({
  selector: 'app-kereso',
  templateUrl: './kereso.component.html',
})
export class KeresoComponent implements OnInit {
  orderProperty: OrderProperty = { property: 'azonosito', direction: OrderDirection.Asc };
  searchParamters: SearchParameterBase = {
    order: [this.orderProperty],
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
        filterProperty: 'szemely',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'iranyitoszam',
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
        filterProperty: 'elerhetoseg',
        type: OperationType.Contains,
      },
      {
        filterProperty: 'tevekenyseg',
        type: OperationType.Contains,
      }
    ]
  };
  szervezetek: Szervezet[];
  p: any;
  constructor(private service: SzervezetService, private modalService: NgbModal) { }

  ngOnInit() {
    this.search();

  }
  search() {
    this.service.getItems(this.searchParamters).subscribe(res => this.szervezetek = res);
    this.p = 1;
  }

  order(property: string) {
    var wasChange = false;
    if (this.orderProperty.property != property) {
      this.orderProperty.property = property;
      wasChange = true;
    }
    if (this.orderProperty.direction == OrderDirection.Asc) {
      this.orderProperty.direction = OrderDirection.Desc;
    } else {
      this.orderProperty.direction = OrderDirection.Asc;
    }
    console.log("called");
    this.search();

  }

  splittedEmails(szervezet: Szervezet): string[] {
    var vesszo = szervezet.elerhetoseg.split(',');
    if (vesszo.length > 1) return vesszo;
    var pontos = szervezet.elerhetoseg.split(';');
    if (pontos.length > 1) return pontos;

    return [szervezet.elerhetoseg];
  }

  orderClass(property: string) {
    if (property != this.orderProperty.property) return '';
    var order = 'order ';
    if (this.orderProperty.direction == OrderDirection.Asc) {
      order += 'asc';
    } else {
      order += 'desc';
    }
    return order;
  }

  fullscreen(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
