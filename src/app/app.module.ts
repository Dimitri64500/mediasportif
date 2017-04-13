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

@NgModule({
  imports: [BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, TimelineComponent, LoginComponent, AdminAccueilComponent, AccueilComponent, MenuComponent, RecapArticleComponent, AjoutProgrammeComponent, AjoutArticleComponent],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, TimelineComponent, LoginComponent, AdminAccueilComponent, AccueilComponent, MenuComponent, CarouselComponent ],
  imports:      [ BrowserModule,
    MdGridListModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    HttpModule,
    AppRoutingModule],
  declarations: [ AppComponent,
    TimelineComponent,
    LoginComponent,
    AdminAccueilComponent,
    AccueilComponent,
    MenuComponent,
    CarouselComponent,
    TwitterComponent,
    LiensComponent],
  providers:    [ AuthenticationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
