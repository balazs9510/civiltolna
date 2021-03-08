import { Observable } from "rxjs";
import { BaseEntity } from "./base-entity";
import { OrderDirection, SearchParameterBase } from "./search-parameter";

export class PageModel<T extends BaseEntity>{
    allData: Observable<T[]>;
    editData: T;
    isEdit: boolean;
    deleteData: T;
    searchParameter: SearchParameterBase;
    /**
     *
     */
    constructor() {
        this.editData = null;
        this.isEdit = false;
        this.searchParameter = {
            order: [{ property: "date", direction: OrderDirection.Desc }],
        }
    }
}