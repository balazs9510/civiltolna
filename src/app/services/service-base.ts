import { AngularFirestoreCollection, AngularFirestore, DocumentReference, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { BaseEntity } from '../models/base-entity';
import { FitlerParameter, OperationType, OrderDirection, OrderProperty, SearchParameterBase } from '../models/search-parameter';
import { map } from 'rxjs/operators';

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

    getItems(parameters: SearchParameterBase = null): Observable<T[]> {
        // if (parameters) {
        //     this.dataStore = this.fireStore
        //         .collection(this.entityName, ref => {
        //             let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        //             // query = this.order(parameters.order, query);
        //             // query = this.filter(parameters.filterServer, query);
        //             return query;
        //         });
        // }
        return this.dataStore.valueChanges().pipe(
            map(entities => {
                const mapped: T[] = [];
                for (const entity of entities) {
                    if (parameters) {
                        if (this.isMatch(parameters.filterClient, entity)) {
                            mapped.push(entity);
                        }
                    } else {
                        mapped.push(entity);
                    }
                }
                return this.orderClient(mapped, parameters.order);
            })
        );
    }

    addItemWithId(item: T): string {
        const id = this.generateId();
        this.dataStore.doc(id).set({ id: id, ...item });
        return id;
    }
    updateItem(entity: T): Promise<void> {
        return this.dataStore.doc(entity.id).update({ ...entity });
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


    private orderClient(list: T[], orderList: OrderProperty[]): T[] {
        if (!orderList) return list;
        orderList.forEach(order => {
            list = list.sort((a, b) => { return this.orderClientByProp(a, b, order); })
        });

        return list;
    }

    private orderClientByProp(first: T, second: T, order: OrderProperty): number {
        if (!order) return;

        if (order.direction && order.direction == OrderDirection.Asc) {
            return first[order.property] - second[order.property];
        }
        return second[order.property] - first[order.property];
    }

    private order(orderList: OrderProperty[], ref: CollectionReference | Query): CollectionReference | Query {
        if (!orderList || orderList.length === 0) { return ref; }
        orderList.forEach(order => {
            ref = ref.orderBy(order.property, order.direction);
        });
        return ref;
    }

    private filterClient(filterList: FitlerParameter[], list: T[]): T[] {
        if (!filterList || filterList.length === 0) { return list; }
        filterList.forEach(filter => {
            if (filter.filterValue) {
                if (filter.type == OperationType.Contains)
                    list = list.filter(x => x[filter.filterProperty].contains(filter.filterValue))
                if (filter.type == OperationType.Equals)
                    list = list.filter(x => x[filter.filterProperty] == filter.filterValue)
            }
        });
        return list;
    }

    private filter(filterList: FitlerParameter[], ref: CollectionReference | Query): CollectionReference | Query {
        if (!filterList || filterList.length === 0) { return ref; }
        filterList.forEach(filter => {
            if (filter.filterValue) {
                // if (filter.type == OperationType.Contains)
                //     ref = ref.where(filter.filterProperty, 'array-contains', filter.filterValue);
                if (filter.type == OperationType.Equals)
                    ref = ref.where(filter.filterProperty, '==', filter.filterValue);
            }
        });
        return ref;
    }

    private isMatch(filterList: FitlerParameter[], data: T): boolean {
        if (!filterList) { return true; }
        let result = true;
        filterList.forEach(filterEl => {
            if (filterEl.type && filterEl.filterValue) {
                if (filterEl.type === OperationType.Equals as OperationType) {
                    if (data[filterEl.filterProperty] != filterEl.filterValue) {
                        result = false;
                    }
                }
                if (filterEl.type === OperationType.Gt as OperationType) {
                    if (data[filterEl.filterProperty] < filterEl.filterValue) {
                        result = false;
                    }
                }
                if (filterEl.type === OperationType.Lt as OperationType) {
                    if (data[filterEl.filterProperty] > filterEl.filterValue) {
                        result = false;
                    }
                }
                if (filterEl.type === OperationType.Contains as OperationType) {
                    const stringProperty = data[filterEl.filterProperty] as string;
                    if (!stringProperty.includes(filterEl.filterValue)) {
                        result = false;
                    }
                }
            }
        });

        return result;
    }
}
