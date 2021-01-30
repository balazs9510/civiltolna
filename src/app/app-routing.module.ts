import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HirekComponent } from './components/hirek/hirek.component';
import { KapcsolatComponent } from './components/kapcsolat/kapcsolat.component';
import { BelepesComponent } from './components/private/belepes/belepes.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', component: KapcsolatComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'belepes', component: BelepesComponent },
  { path: 'privat', component: KapcsolatComponent, canActivate: [AuthGuard], children: [
      { path: '', component: KapcsolatComponent, canActivate: [AuthGuard] },    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
