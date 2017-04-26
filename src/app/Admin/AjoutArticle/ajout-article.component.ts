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
  valeurtmp: string;

  setValue(data: string) {
    this.valeurtmp = data;
    console.log('hola' + this.valeurtmp);
  }

  getValue() {
    return this.valeurtmp;
  }
  constructor(
    private CategorieService: CategoriesService ) { }

  getCategorie(): void {
    this.CategorieService.getCategories().then(categories => this.categories = categories);
  }
  /*instancié le momoent qu on change la catégorie*/
  getSousCategorie(id: string): void {
    this.CategorieService.getSousCategories(id).then(scategories => this.souscategories = scategories);
  }
  ngOnInit(): void {
    this.getCategorie();
  }
}
