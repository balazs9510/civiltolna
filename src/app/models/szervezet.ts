import { BaseEntity } from "./base-entity";

export class Szervezet extends BaseEntity {
    azonosito: string;
    nev: string;
    varos: string;
    cim: string;
    iranyitoszam: string;
    szemely: string;
    elerhetoseg: string;
    tevekenyseg: string;

    constructor() {
        super();
        this.azonosito = '';
        this.nev = '';
        this.varos = '';
        this.cim = '';
        this.szemely = '';
        this.elerhetoseg = '';
        this.iranyitoszam = '';
        this.tevekenyseg = '';
    }

    public splittedEmails(): string[] {
        var vesszo = this.elerhetoseg.split(',');
        if (vesszo.length > 1) return vesszo;
        var pontos = this.elerhetoseg.split(';');
        if (pontos.length > 1) return pontos;

        return [this.elerhetoseg];
    }
}