import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HasznosInformacio } from 'src/app/models/hasznos-informacio';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { HasznosInformaciokService } from 'src/app/services/hasznos-informaciok.service';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';

@Component({
  selector: 'app-hasznos-informaciok',
  templateUrl: './hasznos-informaciok.component.html'
})
export class HasznosInformaciokComponent implements OnInit {

  info: PageTemplate;
  loading = false;
  constructor(private service: PageTemaplateService ) { }

  ngOnInit() {
    this.loading = true;
    this.service.getItems().subscribe(r => {
      this.info = r.find(x => x.pageId == Constants.HasznosInformaciokPageId);
      this.loading = false;
    })
  }

}
