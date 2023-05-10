import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';

@Component({
  selector: 'app-palyazatok',
  templateUrl: './palyazatok.component.html'
})
export class PalyazatokComponent implements OnInit {

  private pageId = Constants.PalyazatokPageId;
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
