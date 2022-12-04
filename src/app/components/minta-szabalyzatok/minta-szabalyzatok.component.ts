import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';

@Component({
  selector: 'app-minta-szabalyzatok',
  templateUrl: './minta-szabalyzatok.component.html',
})
export class MintaSzabalyzatokComponent implements OnInit {


  private pageId = Constants.MintaszabalyokPageId;
  info: PageTemplate;
  loading = false;
  title: string;
  constructor(private service: PageTemaplateService) { }

  ngOnInit() {
    this.title = Constants.PageIdTilteMapping[this.pageId];
    this.loading = true;
    this.service.getItems().subscribe(r => {
      this.info = r.find(x => x.pageId == this.pageId);
      this.loading = false;
    })
  }
}
