import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../component/app.component';
import { MdGridListModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import {TimelineComponent} from '../component/timeline.component';



@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule],
  declarations: [ AppComponent, TimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

