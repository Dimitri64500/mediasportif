import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Etiquette } from '../Model/Etiquette';

@Injectable()
export class EtiquetteService {/*
  private headers = new Headers({'Content-Type': 'application/json'});
  private etiquettesUrl = 'http://tv-rights.com/php/api/apiArticlesEtiquettes';  // URL to web api

  constructor(private http: Http) { }

  getEtiquettes(): Promise<Etiquette[]> {
    return this.http.get(this.etiquettesUrl)
      .toPromise()
      .then(response => response.json().data as Etiquette[])
      .catch(this.handleError);
  }

  getEtiquette(id: number): Promise<Etiquette> {
    const url = `${this.etiquettesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Etiquette)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.etiquettesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Etiquette> {
    return this.http
      .post(this.etiquettesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Etiquette)
      .catch(this.handleError);
  }

  update(etiquette: Etiquette): Promise<Etiquette> {
    const url = `${this.etiquettesUrl}/${etiquette.id}`;
    return this.http
      .put(url, JSON.stringify(etiquette), {headers: this.headers})
      .toPromise()
      .then(() => etiquette)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
}
