import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';
import {Categorie} from '../../Model/Categorie';
import {CategoriesService} from '../../Service/CategorieService';
import {SelectItem} from 'primeng/primeng';


@Component({
  selector: 'my-pagedroitstv',
  templateUrl: './page-droits-tv.component.html',
  styleUrls: ['./page-droits-tv.component.scss']
})

export class DroitsTvComponent implements OnInit {

  articlesDroitsTV: ArticleNote[];
  souscategoriesBack: Categorie[];
  souscategoriesFront: SelectItem[];

  selectedSousCat: string[];

  constructor(private articleService: ArticleService,
              private categorieService: CategoriesService) {
  }

  getArticlesByCategorie(categorie: Number): void {
    this.articleService.getArticlesByCategorie(categorie).then(res => this.articlesDroitsTV = res);
  }

  getSousCategorieByCategorie(categorie: number): void {
    this.categorieService.getSousCategories(categorie).then(res => {
      this.souscategoriesBack = res;
      this.souscategoriesFront = [];
      this.souscategoriesBack.forEach(sousc => this.souscategoriesFront.push({label: sousc.nom , value: sousc.id}));
    });

  }

  ngOnInit(): void {
    this.getArticlesByCategorie(1);
    this.getSousCategorieByCategorie(1);
  }

}
