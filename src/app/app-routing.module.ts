import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgyesuletComponent } from './components/egyesulet/egyesulet.component';
import { HirekComponent } from './components/hirek/hirek.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { BelepesComponent } from './components/private/belepes/belepes.component';
import { HirekKezeleseComponent } from './components/private/hirek-kezelese/hirek-kezelese.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', component: HirekComponent },
  { path: 'hirek', component: HirekComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'egyesulet', component: EgyesuletComponent },
  { path: 'belepes', component: BelepesComponent },
  { path: 'hirek-kezelese', component: HirekKezeleseComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
