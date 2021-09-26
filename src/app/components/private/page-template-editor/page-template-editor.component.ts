import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PageTemplate } from 'src/app/models/page-temaplate';
import { PageModel } from 'src/app/models/page-model';
import Base64UA from 'src/@ckeditor/Base64Upload';
import { PageTemaplateService } from 'src/app/services/hirlevelek.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-template-editor',
  templateUrl: './page-template-editor.component.html',
})
export class PageTemplateEditorComponent implements OnInit {
  readonly Constants = Constants;
  public Editor = ClassicEditor;
  editorConfig = { extraPlugins: [Base64UA] }
  pageTemplate: PageTemplate;
  pageModel: PageModel<PageTemplate>;
  pageTitle: string;
  @Input() pageId;

  constructor(private service: PageTemaplateService, private toastr: ToastrService) {
    this.pageModel = new PageModel<PageTemplate>();
  }

  ngOnInit() {   
    this.pageTitle = Constants.PageIdTilteMapping[this.pageId];
    this.service.getItems().subscribe(r => {
      this.pageTemplate = r.find(x => x.pageId == this.pageId);
      console.log(this.pageTemplate);
      
      if (!this.pageTemplate) {
        this.pageTemplate = new PageTemplate();
        this.pageTemplate.pageId = this.pageId;
        this.pageTemplate.content = '';

        this.service.addItemWithId({ ... this.pageTemplate });
      }
    });
  }


  edit() {
    this.pageModel.editData = this.pageTemplate;
    this.pageModel.isEdit = true;
  }
  
  save() {
    if (!this.pageModel.editData.content) {
      this.toastr.warning("Töltse ki a tartalmat!")
      return;
    }
    this.pageModel.editData.pageId = this.pageId;
    this.service.updateItem({ ... this.pageModel.editData });

    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }

  cancel() {
    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }
}
