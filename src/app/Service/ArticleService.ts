/**
 * Created by Denis on 14/04/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Article} from './../Model/Article';
import {ArticleNote} from '../Model/ArticleNote';

@Injectable()
export class ArticleService {
  saveJwt: any;
  creds: string;

  constructor(private http: Http) {}
  addArticles(titre: string, texte: string, resume: string, idutilisateur: number, url: string, status: string,
              etiquette: string, activecomment: number, alaune : number, imagealaune : string): Promise<Article> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8088/api/ajouterArticle',
      JSON.stringify({titre: titre, texte: texte, resume: resume, idutilisateur : idutilisateur,
        url: url, status: status, etiquette: etiquette, activecomment: activecomment, alaune: alaune, imagealaune : imagealaune}), options)
      .toPromise()
      .then(res => { console.log(res.json().data); return res.json().data as Article; } )
      .catch(this.handleError);
  }
  getArticles(): Promise<Article[]> {
    return this.http.get('http://localhost:8088/api/articles')
      .toPromise()
      .then(res => <Article[]> res.json());
  }
  getArticlesWithAuthor(): Promise<Article[]> {
    return this.http.get('http://localhost:8088/api/articlesauthor')
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
  getArticlesALaUne(): Promise<Article[]> {
    return this.http.get('http://localhost:8088/api/articlesalaune')
      .toPromise()
      .then(res => <Article[]> res.json());
  }
  getArticlesByCategorie(categorie: Number): Promise<ArticleNote[]> {
    return this.http.get('http://localhost:8088/api/articlesbycategorie/' + categorie)
      .toPromise()
      .then(res => <ArticleNote[]> res.json());
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
