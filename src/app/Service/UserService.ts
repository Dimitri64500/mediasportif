/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../Model/User';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUserbById(id: number): Promise<User> {
    return this.http.get('http://tv-rights.com/php/api/user/' + id)
      .toPromise()
      .then(res => <User> res.json());
  }
}
