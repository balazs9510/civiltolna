import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Hir } from '../models/hir';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class HirService extends ServiceBase<Hir> {

  constructor(protected fireStore: AngularFirestore, protected storage: AngularFireStorage) {
    super(fireStore, 'hirek', storage);
  }
}
