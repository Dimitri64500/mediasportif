/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './../Model/User';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUser(id: number): Promise<User> {
    return this.http.get('http://localhost:8088/api/user/' + id)
      .toPromise()
      .then(res => <User> res.json());
  }
}
