/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Article} from './../Model/Article';
import {ArticleNote} from '../Model/ArticleNote';

@Injectable()
export class ArticleService {

  constructor(private http: Http) {}

  getArticles(): Promise<Article[]> {
    return this.http.get('http://localhost:8088/api/articles')
      .toPromise()
      .then(res => <Article[]> res.json());
  }
  getArticle(url: String): Promise<Article> {
    return this.http.get('http://localhost:8088/api/article/' + url)
      .toPromise()
      .then(res => <Article> res.json());
  }
  getArticlesNotes(): Promise<ArticleNote[]> {
    return this.http.get('http://localhost:8088/api/articlesnotes')
      .toPromise()
      .then(res => <ArticleNote[]> res.json());
  }
}
