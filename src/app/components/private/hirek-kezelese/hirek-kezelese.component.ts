import { Component, OnInit } from '@angular/core';
import { Hir } from 'src/app/models/hir';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Base64UA from 'src/@ckeditor/Base64Upload';

@Component({
  selector: 'app-hirek-kezelese',
  templateUrl: './hirek-kezelese.component.html',
})
export class HirekKezeleseComponent implements OnInit {
  public Editor = ClassicEditor;
  editorConfig = { extraPlugins: [Base64UA] }
  model: Hir;
  constructor() { }

  ngOnInit() {
  }
  create() {
    this.model = new Hir();
  }
  save() {
    console.log(this.model);
    this.model = null;
  }
}
