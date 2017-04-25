import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {MdGridListModule, MdToolbarModule, MdButtonModule} from '@angular/material';
import {TimelineComponent} from './Site/Timeline/timeline.component';
import {LoginComponent} from './Site/Login/login.component';
import {AuthenticationService} from './Site/authentication.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule}     from './app-routing.module';
import {AdminAccueilComponent} from './Admin/Accueil/admin-accueil.component';
import {AccueilComponent} from './Site/Accueil/accueil.component';
import {MenuComponent} from './Site/Menu/menu.component';
import {CarouselComponent} from './Site/Carousel/carousel.component';
import {RecapArticleComponent} from './Admin/RecapArticles/recap-article.component';
import {AjoutProgrammeComponent} from './Admin/AjoutProgramme/ajout-programme.component';
import {AjoutArticleComponent} from './Admin/AjoutArticle/ajout-article.component';
import {TwitterComponent} from './Site/Twitter/twitter.component';
import {LiensComponent} from './Site/Liens/liens.component';
import {FooterComponent} from './Site/Footer/footer.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {ArticleService} from './Service/ArticleService';
import {CategoriesService} from './Service/CategorieService';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/components/editor/editor';




@NgModule({
  imports: [EditorModule, FormsModule, BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, HttpModule, AppRoutingModule, DataTableModule, SharedModule],
  declarations: [AppComponent,
    TimelineComponent,
    LoginComponent,
    AdminAccueilComponent,
    AccueilComponent,
    MenuComponent,
    RecapArticleComponent,
    AjoutProgrammeComponent,
    AjoutArticleComponent,
    CarouselComponent,
    TwitterComponent,
    LiensComponent,
    FooterComponent,
    LiensComponent],
  providers: [AuthenticationService, ArticleService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
