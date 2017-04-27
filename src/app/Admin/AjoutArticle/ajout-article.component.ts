import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {Categorie} from '../../Model/Categorie';
import {SelectItem} from "primeng/primeng";

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
  checked: boolean = false;
  cities: SelectItem[];

  selectedCity: string;

  onChange(cat: Categorie) {
    this.valeurtmp = cat.id;
  }
  constructor(private CategorieService: CategoriesService ) {
    this.cities = [];
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
  }

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

  count() {
  }
}
