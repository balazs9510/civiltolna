import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hir } from 'src/app/models/hir';
import { OrderDirection } from 'src/app/models/search-parameter';
import { HirService } from 'src/app/services/hir-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hirek',
  templateUrl: './hirek.component.html',
})
export class HirekComponent implements OnInit {
  $hirek: Observable<Hir[]>;
  p: any;

  constructor(private service: HirService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.$hirek = this.service.getItems({ order: [{ property: "date", direction: OrderDirection.Desc }] });
  }

  sanitize(html) {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
