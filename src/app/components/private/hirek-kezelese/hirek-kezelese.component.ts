import { Component, OnInit } from '@angular/core';
import { Hir } from 'src/app/models/hir';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Base64UA from 'src/@ckeditor/Base64Upload';
import { PageModel } from 'src/app/models/page-model';
import { HirService } from 'src/app/services/hir-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hirek-kezelese',
  templateUrl: './hirek-kezelese.component.html',
})
export class HirekKezeleseComponent implements OnInit {
  public Editor = ClassicEditor;
  editorConfig = { extraPlugins: [Base64UA] }
  pageModel: PageModel<Hir>;
  isEdit = false;

  constructor(private hirService: HirService) {
    this.pageModel = new PageModel<Hir>();
  }

  ngOnInit() {
    this.pageModel.allData = this.hirService.getItems().pipe(
      map(results => results.sort(function (a, b) {
        return a.date > b.date ? -1 : 1;
      }))
    );
  }

  create() {
    this.pageModel.editData = new Hir();
  }

  save() {
    this.hirService.addItemWithId(this.pageModel.editData);
    this.pageModel.editData = null;
  }
  delete(hir: Hir) {
    this.hirService.deleteItem(hir);
  }
}
