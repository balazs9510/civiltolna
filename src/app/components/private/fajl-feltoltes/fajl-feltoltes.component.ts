import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { Constants } from 'src/app/constants';
import { FileUpload } from 'src/app/models/file-upload';
import { PageModel } from 'src/app/models/page-model';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-fajl-feltoltes',
  templateUrl: './fajl-feltoltes.component.html',
})
export class FajlFeltoltesComponent implements OnInit {
  readonly Constants = Constants;
  pageModel: PageModel<FileUpload>;
  public loading = false;
  uploadFile: any;
  linkContainer = {};
  constructor(private service: FileUploadService, private modalService: NgbModal, private toastr: ToastrService) {
    this.pageModel = new PageModel<FileUpload>();
  }

  ngOnInit() {
    this.pageModel.allData = this.service.getItems(this.pageModel.searchParameter);
    this.pageModel.allData.subscribe(x => {
      x.forEach(element => {
        this.linkContainer[element.id] = this.service.getDowloandUrlForFilePath(element.path);
      });
    });
  }

  create() {
    this.pageModel.editData = new FileUpload();
  }

  changeFile(event) {
    this.uploadFile = event.target.files[0];
  }

  getLink(upload: FileUpload) {
    return this.linkContainer[upload.id];
  }

  save() {
    if (!this.uploadFile) {
      this.toastr.warning('Töltsön fel egy fájlt!');
      return;
    }
    if (this.uploadFile.size > 25 * 1024 * 1024){
      this.toastr.warning('A fájl méret meghaladja a 25 megabájtot!');
      return;
    }
    this.loading = true;
    let uploadPath = `file-uploads/`;
    let editData = this.pageModel.editData;
    if (editData.path) {
      uploadPath += editData.path + '/';
    }
    uploadPath += this.uploadFile.name;

    const task = this.service.uploadFile(uploadPath, this.uploadFile);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.loading = false;
        editData.path = uploadPath;

        this.service.addItemWithId(this.pageModel.editData);
        this.pageModel.editData = null;
        this.pageModel.isEdit = false;
      })
    ).subscribe()

  }

  cancel() {
    this.pageModel.editData = null;
    this.pageModel.isEdit = false;
  }
  open(content, entity = null) {
    this.modalService.open(content, { size: 'lg' });
    this.pageModel.deleteData = entity;
  }
}
