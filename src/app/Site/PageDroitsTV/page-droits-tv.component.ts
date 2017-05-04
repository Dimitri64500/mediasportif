import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';
import {Categorie} from '../../Model/Categorie';
import {CategoriesService} from '../../Service/CategorieService';
import {SelectItem} from 'primeng/primeng';
import {SousCategorie} from "../../Model/SousCategorie";


@Component({
  selector: 'my-pagedroitstv',
  templateUrl: './page-droits-tv.component.html',
  styleUrls: ['./page-droits-tv.component.scss']
})

export class DroitsTvComponent implements OnInit {

  articlesDroitsTV: ArticleNote[];
  categories : Categorie[];
  selectedCat : Categorie[] ;
  sousCategories :  SousCategorie[];


  //selectedSousCat: string[];

  constructor(private articleService: ArticleService,
              private categorieService: CategoriesService) {
  }

  getArticlesByCategorie(categorie: Number): void {
    this.articleService.getArticlesByCategorie(categorie).then(res => this.articlesDroitsTV = res);
  }

 /* getSousCategorieByCategorie(categorie: number): void {
    this.categorieService.getCategories().then(res => {
      this.souscategoriesBack = res;
      this.souscategoriesFront = [];
      this.souscategoriesBack.forEach(sousc => this.souscategoriesFront.push({label: sousc.nom , value: sousc.id}));
    });

  }*/
  getCategorie(): void {
    this.categorieService.getCategories().then(categories => {
      this.categories = categories.filter(t => t.idcategorie==1);
      this.sousCategories = this.categories[0].sousCategorie;
    });
  }

  ngOnInit(): void {
    this.getArticlesByCategorie(1);
    this.getCategorie();
  }

}
