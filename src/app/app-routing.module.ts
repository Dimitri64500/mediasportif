import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminAccueilComponent} from './Admin/admin-accueil.component';
import {AccueilComponent} from './Site/Accueil/accueil.component';

const routes: Routes = [
  { path: 'admin', component: AdminAccueilComponent },
  // { path: 'admin', component: AdminComponent },
  { path: '', component: AccueilComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
