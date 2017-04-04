/**
 * Created by Rhita on 04/04/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadComponent } from './head.component';
import { MdGridListModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, MdGridListModule, MdToolbarModule ],
  declarations: [ HeadComponent ],
  bootstrap:    [ HeadComponent ]
})
export class HeadModule { }
