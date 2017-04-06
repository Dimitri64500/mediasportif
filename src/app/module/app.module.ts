import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../component/app.component';
import { MdGridListModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TimelineComponent} from '../component/timeline.component';



@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule, NgbModule],
  declarations: [ AppComponent, TimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

