import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';

@Component({
  selector: 'app-okosfuzet',
  templateUrl: './okosfuzet.component.html',
})
export class OkosfuzetComponent implements OnInit {
  info: PageTemplate;
  loading = false;
  title: string;
  constructor(private service: PageTemaplateService) { }

  ngOnInit() {
    this.title = Constants.PageIdTilteMapping[Constants.OkosFuzetPageId];
    this.loading = true;
    this.service.getItems().subscribe(r => {
      this.info = r.find(x => x.pageId == Constants.OkosFuzetPageId);
      this.loading = false;
    })
  }

}
