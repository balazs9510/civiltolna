import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hir } from 'src/app/models/hir';
import { HirService } from 'src/app/services/hir-service.service';

@Component({
  selector: 'app-hirek',
  templateUrl: './hirek.component.html',
})
export class HirekComponent implements OnInit {
  $hirek : Observable<Hir[]>;

  constructor(private service: HirService) { }

  ngOnInit() {
    this.$hirek = this.service.getItems();
  }
}
