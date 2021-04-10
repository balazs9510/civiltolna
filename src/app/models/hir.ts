import { BaseEntity } from "./base-entity";

export class Hir extends BaseEntity {
    title: string;
    content: string;

    // frontend
    isOpened: boolean;

    constructor() {
        super();
        this.title = '';
        this.content = '';
        this.isOpened = false;
    }
}