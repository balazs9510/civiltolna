import { Observable } from "rxjs";

export class PageModel<T>{
    allData: Observable<T[]>;
    editData: T;
    isEdit: boolean;

    /**
     *
     */
    constructor() {
        this.editData = null;
        this.isEdit = false;
    }
}