import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../component/app.component';
import { MdGridListModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import {TimelineComponent} from '../component/timeline.component';
import {LoginComponent} from "../component/login.component";
import {AuthenticationService} from "../component/authentication.component";
import {Http, Response} from '@angular/http';
import { HttpModule } from '@angular/http';



@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, HttpModule],
  declarations: [ AppComponent, TimelineComponent, LoginComponent],
  providers:    [ AuthenticationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
