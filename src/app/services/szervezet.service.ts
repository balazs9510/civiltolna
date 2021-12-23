import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Szervezet } from '../models/szervezet';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class SzervezetService extends ServiceBase<Szervezet> {

  constructor(protected fireStore: AngularFirestore, protected storage: AngularFireStorage) {
    super(fireStore, 'szervezetek', storage);
  }
}
