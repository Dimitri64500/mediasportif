/**
 * Created by med on 24/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Categorie} from './../Model/Categorie';

@Injectable()
export class CategorieService{

  constructor(private http: Http) {}

  getCategories(): Promise<Categorie[]> {
    return this.http.get('http://localhost:8088/api/categories')
      .toPromise()
      .then(res => <Categorie[]> res.json());
  }
}
