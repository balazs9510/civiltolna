import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { PageTemplate } from '../models/page-temaplate';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class PageTemaplateService extends ServiceBase<PageTemplate> {

  constructor(protected fireStore: AngularFirestore, protected storage: AngularFireStorage) {
    super(fireStore, 'page-templates', storage);
  }
}
