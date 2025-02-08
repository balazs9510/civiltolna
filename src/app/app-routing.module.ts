import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CivilAdatbazisComponent } from "./components/civil-adatbazis/civil-adatbazis.component";
import { CivilkozpontComponent } from "./components/civilkozpont/civilkozpont.component";
import { EgyesuletComponent } from "./components/egyesulet/egyesulet.component";
import { HasznosInformaciokComponent } from "./components/hasznos-informaciok/hasznos-informaciok.component";
import { HirekComponent } from "./components/hirek/hirek.component";
import { HirlevelekComponent } from "./components/hirlevelek/hirlevelek.component";
import { KapcsolatComponent } from "./components/kapcsolat/kapcsolat.component";
import { MintaSzabalyzatokComponent } from "./components/minta-szabalyzatok/minta-szabalyzatok.component";
import { OkosfuzetComponent } from "./components/okosfuzet/okosfuzet.component";
import { BelepesComponent } from "./components/private/belepes/belepes.component";
import { FajlFeltoltesComponent } from "./components/private/fajl-feltoltes/fajl-feltoltes.component";
import { HirekKezeleseComponent } from "./components/private/hirek-kezelese/hirek-kezelese.component";
import { PageTemplateHandlingComponent } from "./components/private/page-template-handling/page-template-handling.component";
import { SzervezetBetoltesComponent } from "./components/private/szervezet-betoltes/szervezet-betoltes.component";
import { ProgramokComponent } from "./components/programok/programok.component";
import { UserAgreementComponent } from "./components/user-agreement/user-agreement.component";
import { AuthGuard } from "./core/auth.guard";
import { PalyazatokComponent } from "./components/palyazatok/palyazatok.component";
import { CivilReferensekComponent } from "./components/civil-referensek/civil-referensek.component";
import { JotekonysagiProgramokComponent } from "./components/jotekonysagi-programok/jprogramok.component";
import { PetofiProgramComponent } from "./components/petofi-program/petofiProgram.component";

const routes: Routes = [
  { path: "", component: HirekComponent },
  { path: "hirek", component: HirekComponent },
  { path: "kapcsolat", component: KapcsolatComponent },
  { path: "egyesulet", component: EgyesuletComponent },
  { path: "belepes", component: BelepesComponent },
  { path: "hasznos-informaciok", component: HasznosInformaciokComponent },
  { path: "civilkozpont", component: CivilkozpontComponent },
  { path: "civil-adatbazis", component: CivilAdatbazisComponent },
  { path: "hirlevelek", component: HirlevelekComponent },
  { path: "okosfuzet", component: OkosfuzetComponent },
  { path: "programok", component: ProgramokComponent },
  { path: "minta-szabalyzatok", component: MintaSzabalyzatokComponent },
  { path: "palyazatok", component: PalyazatokComponent },
  { path: "civil-referensek", component: CivilReferensekComponent },
  { path: "jotekonysagi-programok", component: JotekonysagiProgramokComponent },
  { path: "petofi-program", component: PetofiProgramComponent },
  { path: "user-agreement", component: UserAgreementComponent },
  {
    path: "hirek-kezelese",
    component: HirekKezeleseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "fajl-feltoltes",
    component: FajlFeltoltesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "szervezet-betoltes",
    component: SzervezetBetoltesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sablon-kezeles/:pageName",
    component: PageTemplateHandlingComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
