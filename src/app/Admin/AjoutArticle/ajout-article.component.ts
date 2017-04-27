import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {Categorie} from '../../Model/Categorie';

@Component({
  selector: 'my-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss', ]
})

export class AjoutArticleComponent implements OnInit {
  categories: Categorie[]; // liste pour récuperer tous les catégories
  souscategories: Categorie[];
  text1: string;
  id: number;
  valeurtmp: number;


  onChange(cat: Categorie) {
    this.valeurtmp = cat.id;
  }
  constructor(
    private CategorieService: CategoriesService ) { }

  getCategorie(): void {
    this.CategorieService.getCategories().then(categories => this.categories = categories);
  }
  /*instancié le momoent qu on change la catégorie*/
  getSousCategorie(id: number): void {
    this.CategorieService.getSousCategories(id).then(souscategories => this.souscategories = souscategories);
  }
  ngOnInit(): void {
    this.getCategorie();
    this.getSousCategorie(1);
  }
}
