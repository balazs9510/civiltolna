import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Szervezet } from 'src/app/models/szervezet';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { SzervezetService } from 'src/app/services/szervezet.service';
import firebase from 'firebase';

@Component({
  selector: 'app-szervezet-betoltes',
  templateUrl: './szervezet-betoltes.component.html',
})
export class SzervezetBetoltesComponent implements OnInit {
  szervezetek: Szervezet[];
  constructor(private modalService: NgbModal, private toastr: ToastrService, private szervezetService: SzervezetService) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  import() {
    if (this.szervezetek && this.szervezetek.length > 0) {
      this.szervezetek.forEach(e => {
        e.date = firebase.firestore.Timestamp.fromDate(new Date());
        this.szervezetService.addItemWithId(e);
      });
      console.log(this.szervezetek);
      
      this.toastr.success(`Sikeres betöltés, új elem: ${this.szervezetek.length}`);
    }
    else {
      this.toastr.error("Sikertelen betöltés");
    }
  }

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      console.log(wsname);

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data); // Data will be logged in array format containing objects
      this.szervezetek = data.map(x => {
        var szervezet = new Szervezet();
        szervezet.azonosito = x["Azonosító szám"];
        szervezet.nev = x["Név"] || '';
        szervezet.szemely = x["Elnök, titkár"] || '';
        szervezet.varos = x["Helység"] || '';
        szervezet.cim = x["Cím"] || '';
        szervezet.iranyitoszam = x["Irányítószám"] || '';
        szervezet.elerhetoseg = x["E-mail"] || '';
        szervezet.tevekenyseg = x["Fő tevékenység"] || '';
        return szervezet;
      });
    };
  }
}
