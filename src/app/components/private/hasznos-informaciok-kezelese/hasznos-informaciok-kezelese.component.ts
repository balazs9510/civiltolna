import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { HasznosInformacio } from 'src/app/models/hasznos-informacio';
import { PageModel } from 'src/app/models/page-model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Base64UA from 'src/@ckeditor/Base64Upload';
import { HasznosInformaciokService } from 'src/app/services/hasznos-informaciok.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hasznos-informaciok-kezelese',
  templateUrl: './hasznos-informaciok-kezelese.component.html',
})
export class HasznosInformaciokKezeleseComponent implements OnInit {
  readonly Constants = Constants;
  public Editor = ClassicEditor;
  editorConfig = { extraPlugins: [Base64UA] }
  hasznosInformacio: HasznosInformacio;
  pageModel: PageModel<HasznosInformacio>;

  constructor(private service: HasznosInformaciokService, private toastr: ToastrService) {
    this.pageModel = new PageModel<HasznosInformacio>();
  }

  ngOnInit() {
    this.service.getItems().subscribe(r => {
      this.hasznosInformacio = r[0];
    })
  }


  edit() {
    this.pageModel.editData = this.hasznosInformacio;
    this.pageModel.isEdit = true;
  }
  save() {
    if (!this.pageModel.editData.content) {
      this.toastr.warning("Töltse ki a tartalmat!")
      return;
    }

    this.service.updateItem({ ... this.pageModel.editData });

    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }

  cancel() {
    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }
}
