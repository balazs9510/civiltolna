import { Component, OnInit } from '@angular/core';
import { Hir } from 'src/app/models/hir';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Base64UA from 'src/@ckeditor/Base64Upload';
import { PageModel } from 'src/app/models/page-model';
import { HirService } from 'src/app/services/hir-service.service';
import { map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-hirek-kezelese',
  templateUrl: './hirek-kezelese.component.html',
})
export class HirekKezeleseComponent implements OnInit {
  readonly Constants = Constants;
  public Editor = ClassicEditor;
  editorConfig = { extraPlugins: [Base64UA] }
  pageModel: PageModel<Hir>;

  constructor(private hirService: HirService, private modalService: NgbModal) {
    this.pageModel = new PageModel<Hir>();
  }

  ngOnInit() {
    this.pageModel.allData = this.hirService.getItems(this.pageModel.searchParameter);
  }

  create() {
    this.pageModel.editData = new Hir();
  }

  edit(hir: Hir) {
    this.pageModel.editData = hir;
    this.pageModel.isEdit = true;
  }

  save() {
    if (this.pageModel.isEdit) {
      this.hirService.updateItem(this.pageModel.editData);
    } else {
      this.hirService.addItemWithId(this.pageModel.editData);
    }
    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }

  cancel() {
    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }

  delete() {
    if (this.pageModel.deleteData)
      this.hirService.deleteItem(this.pageModel.deleteData);
  }

  open(content, entity = null) {
    this.modalService.open(content, { size: 'lg' });
    this.pageModel.deleteData = entity;
  }
}
