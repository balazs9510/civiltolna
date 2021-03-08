import { AngularFirestoreCollection, AngularFirestore, DocumentReference, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { BaseEntity } from '../models/base-entity';

export class ServiceBase<T extends BaseEntity> {
    protected dataStore: AngularFirestoreCollection<T>;
    protected entityName: string;
    constructor(protected fireStore: AngularFirestore, nameOfEntity: string, protected storage: AngularFireStorage) {
        this.dataStore = fireStore.collection<T>(nameOfEntity);
        this.fireStore = fireStore;
        this.storage = storage;
        this.entityName = nameOfEntity;
    }

    deleteItem(item: T) {
        return this.dataStore.doc(item.id).delete();
    }

    getItems(): Observable<T[]> {
        return this.dataStore.valueChanges();
    }

    addItemWithId(item: T): string {
        const id = this.generateId();
        this.dataStore.doc(id).set({ id: id, ...item });
        return id;
    }

    uploadFile(filePath: string, file: any): AngularFireUploadTask {
        return this.storage.upload(filePath, file);
    }
    generateId(): string {
        return this.fireStore.createId();
    }
    generateUploadFilePath(extension: string): string {
        return this.entityName + '/' + this.fireStore.createId() + '.' + extension;
    }
    getDowloandUrlForFilePath(filePath: string): Observable<any> {
        const ref = this.storage.ref(filePath);
        return ref.getDownloadURL();
    }
    getById(id: string): Observable<T> {
        return this.dataStore.doc<T>(id).valueChanges();
    }
}
