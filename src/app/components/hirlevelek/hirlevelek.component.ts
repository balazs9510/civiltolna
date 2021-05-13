import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';

@Component({
  selector: 'app-hirlevelek',
  templateUrl: './hirlevelek.component.html',
})
export class HirlevelekComponent implements OnInit {
  info: PageTemplate;
  loading = false;
  constructor(private service: PageTemaplateService) { }

  ngOnInit() {
    this.loading = true;
    this.service.getItems().subscribe(r => {
      this.info = r.find(x => x.pageId == Constants.HirlevelPageId);
      this.loading = false;
    })
  }

}
