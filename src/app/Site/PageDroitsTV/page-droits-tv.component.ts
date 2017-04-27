import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {Article} from '../../Model/Article';
import {TimelineComponent} from '../Timeline/timeline.component';
import {ArticleNote} from '../../Model/ArticleNote';


@Component({
  selector: 'my-pagedroitstv',
  templateUrl: './page-droits-tv.component.html',
  styleUrls: ['./page-droits-tv.component.scss']
})

export class DroitsTvComponent implements OnInit {

  articlesDroitsTV: ArticleNote[];

  constructor(private articleService: ArticleService) {
  }

  getArticlesByCategorie(categorie: Number): void {
    this.articleService.getArticlesByCategorie(categorie).then(res => this.articlesDroitsTV = res);
  }

  ngOnInit(): void {
    //  this.getArticlesByCategorie(1);
    // MOCK :
    this.articlesDroitsTV = [{
      titre: 'titre1',
      texte: 'blable1',
      date: undefined,
      url: 'blabla',
      souscategorie: [{
        id: 1,
        nom: 'blabla1',
        url: 'blablba2'
      }]
    }];
  }

}
