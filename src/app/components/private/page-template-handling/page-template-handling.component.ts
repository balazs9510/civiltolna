import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-template-handling',
  templateUrl: './page-template-handling.component.html',
})
export class PageTemplateHandlingComponent implements OnInit {

  pageName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageName = this.route.snapshot.params['pageName'];
    console.log(this.pageName);
    
  }
}
