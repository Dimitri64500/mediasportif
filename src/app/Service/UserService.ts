/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {User} from '../Model/User';

@Injectable()
export class UserService {
  token: string;
  constructor(private http: Http) {}

  getUserbById(id: number): Promise<User> {
    return this.http.get('http://localhost:8088/api/user/' + id)
      .toPromise()
      .then(res => <User> res.json());
  }
/*  s_Login(name: string, password: string): Promise<boolean> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post('http://localhost:8088/api/authenticate', JSON.stringify({name: name, password: password}), {headers: options})
      .toPromise()
      .then(res => {
        console.log(res);
        let token = res.json();
        if (token) {
          this.token = token;

          localStorage.setItem('currentUser', JSON.stringify({ name: name, token: token}));

          return true;
        } else {
          return false;
        }
      })
      .catch(error => console.log(error));
  }

  s_Logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }*/
}
