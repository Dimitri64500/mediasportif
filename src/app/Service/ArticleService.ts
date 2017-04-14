/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Article} from './../Model/Article';

@Injectable()
export class ArticleService {

  constructor(private http: Http) {}

  getArticles(): Promise<Article[]> {
    return this.http.get('http://localhost:8088/api/articles')
      .toPromise()
      .then(res => <Article[]> res.json());
  }
}
