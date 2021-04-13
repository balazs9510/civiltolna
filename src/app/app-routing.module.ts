import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CivilkozpontComponent } from './components/civilkozpont/civilkozpont.component';
import { EgyesuletComponent } from './components/egyesulet/egyesulet.component';
import { HasznosInformaciokComponent } from './components/hasznos-informaciok/hasznos-informaciok.component';
import { HirekComponent } from './components/hirek/hirek.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { BelepesComponent } from './components/private/belepes/belepes.component';
import { FajlFeltoltesComponent } from './components/private/fajl-feltoltes/fajl-feltoltes.component';
import { HasznosInformaciokKezeleseComponent } from './components/private/hasznos-informaciok-kezelese/hasznos-informaciok-kezelese.component';
import { HirekKezeleseComponent } from './components/private/hirek-kezelese/hirek-kezelese.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', component: HirekComponent },
  { path: 'hirek', component: HirekComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'egyesulet', component: EgyesuletComponent },
  { path: 'belepes', component: BelepesComponent },
  { path: 'hasznos-informaciok', component: HasznosInformaciokComponent },
  { path: 'civilkozpont', component: CivilkozpontComponent },
  { path: 'hirek-kezelese', component: HirekKezeleseComponent, canActivate: [AuthGuard] },
  { path: 'fajl-feltoltes', component: FajlFeltoltesComponent, canActivate: [AuthGuard] },
  { path: 'hasznos-informaciok-kezelese', component: HasznosInformaciokKezeleseComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
