import { BaseEntity } from "./base-entity";

export class Szervezet extends BaseEntity {
    azonosito: string;
    nev: string;
    varos: string;
    cim: string;
    szemely: string;
    elerhetoseg: string;
    
    constructor() {
        super();
        this.azonosito = '';
        this.nev = '';
        this.varos = '';
        this.cim = '';
        this.szemely = '';
        this.elerhetoseg = '';
    }
}