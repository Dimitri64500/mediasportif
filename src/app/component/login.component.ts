/**
 * Created by Dimitri on 11/04/2017.
 */

import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.component";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'my-login',
  templateUrl: './../../templates/login.component.html' ,
  styleUrls: ['./../../styles/login.component.scss']
})
export class LoginComponent  {

  constructor(
    private authentication : AuthenticationService ) { }


  login(login : String, password : String):void{
      login = login.trim();
      password = password.trim();

    this.authentication.login(login,password)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

