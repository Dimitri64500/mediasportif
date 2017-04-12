import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MdGridListModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import {TimelineComponent} from './Site/Timeline/timeline.component';
import {LoginComponent} from './Site/Login/login.component';
import {AuthenticationService} from './Site/authentication.component';
import { HttpModule } from '@angular/http';
import {AppRoutingModule}     from './app-routing.module';
 import {AdminAccueilComponent} from './Admin/admin-accueil.component';
import {AccueilComponent} from './Site/Accueil/accueil.component';
import {MenuComponent} from './Site/Menu/menu.component';


@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, TimelineComponent, LoginComponent, AdminAccueilComponent, AccueilComponent, MenuComponent ],
  providers:    [ AuthenticationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
