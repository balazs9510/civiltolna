import firebase from "firebase";
import { BaseEntity } from "./base-entity";

export class Hir extends BaseEntity {
    title: string;
    content: string;

    /**
     *
     */
    constructor() {
        super();
        this.title = '';
        this.content = '';
    }
}