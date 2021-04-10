import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload } from '../models/file-upload';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService extends ServiceBase<FileUpload> {

  constructor(protected fireStore: AngularFirestore, protected storage: AngularFireStorage) {
    super(fireStore, 'file-upload', storage);
  }
}
