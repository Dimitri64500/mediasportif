/**
 * Created by Dimitri on 11/04/2017.
 */

import { Component } from '@angular/core';
import {AuthenticationService} from '../authentication.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {Observable} from 'rxjs/Rx';

import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-login',
  templateUrl: './login.component.html' ,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  public loginForm = this.fb.group({
    username:["username", Validators.required],
    password: ["password", Validators.required]
  });
  constructor(public fb: FormBuilder,
    private authentication: AuthenticationService ) { }


  login(): void {

    let formData = this.loginForm.value;

let login = formData.username;
let password = formData.password;
 this.authentication.login(login, password).map(res => res)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

