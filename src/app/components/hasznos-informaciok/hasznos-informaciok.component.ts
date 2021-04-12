import { Component, OnInit } from '@angular/core';
import { HasznosInformacio } from 'src/app/models/hasznos-informacio';
import { HasznosInformaciokService } from 'src/app/services/hasznos-informaciok.service';

@Component({
  selector: 'app-hasznos-informaciok',
  templateUrl: './hasznos-informaciok.component.html'
})
export class HasznosInformaciokComponent implements OnInit {

  info: HasznosInformacio;
  loading = false;
  constructor(private service: HasznosInformaciokService, ) { }

  ngOnInit() {
    this.loading = true;
    this.service.getItems().subscribe(r => {
      this.info = r[0];
      this.loading = false;
    })
  }

}
