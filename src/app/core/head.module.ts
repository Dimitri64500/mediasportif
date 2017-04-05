/**
 * Created by Rhita on 04/04/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadComponent } from './head.component';
import { MdGridListModule, MdToolbarModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule, MdButtonModule ],
  declarations: [ HeadComponent ],
  bootstrap:    [ HeadComponent ]
})
export class HeadModule { }
