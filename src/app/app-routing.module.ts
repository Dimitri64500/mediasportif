import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminAccueilComponent} from './Admin/Accueil/admin-accueil.component';
import {AccueilComponent} from './Site/Accueil/accueil.component';
import {RecapArticleComponent} from './Admin/RecapArticles/recap-article.component';
import {AjoutProgrammeComponent} from './Admin/AjoutProgramme/ajout-programme.component';
import {AjoutArticleComponent} from './Admin/AjoutArticle/ajout-article.component';
import {PageArticleComponent} from './Site/PageArticle/pagearticle.component';
import {DroitsTvComponent} from './Site/PageDroitsTV/page-droits-tv.component';
import {MediaFrancaisComponent} from './Site/PageMediaFrancais/page-media-francais.component';
import {MediaEtrangersComponent} from './Site/PageMediaEtrangers/page-media-etrangers.component';

const routes: Routes = [
  { path: 'admin', component: AdminAccueilComponent },
  { path: 'admin/recaparticle', component: RecapArticleComponent },
  { path: 'admin/ajoutarticle', component: AjoutArticleComponent },
  { path: 'admin/ajoutprogramme', component: AjoutProgrammeComponent },
  { path: 'article/:url', component : PageArticleComponent},
  { path: 'Droits-TV', component: DroitsTvComponent},
  { path: 'Media-francais', component: MediaFrancaisComponent},
  { path: 'Media-etrangers', component: MediaEtrangersComponent},

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
