import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { HasznosInformacio } from '../models/hasznos-informacio';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class HasznosInformaciokService extends ServiceBase<HasznosInformacio> {

  constructor(protected fireStore: AngularFirestore, protected storage: AngularFireStorage) {
    super(fireStore, 'hasznos-informacio', storage);
  }
}
