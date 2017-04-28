import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {Categorie} from '../../Model/Categorie';
import {SelectItem} from 'primeng/primeng';
// import {EtiquetteService} from '../../Service/EtiquetteService';

// const LISTETIQUETTES: Etiquette[] = [];

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
  ListEtiquette: SelectItem[];
  part: string[];
  selectedCity: string;
  selectedEtiquettes: string;


  constructor(private CategorieService: CategoriesService,
              /*private etiquetteService: EtiquetteService*/) {
    this.cities = [];
    this.ListEtiquette = [];
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
  }

  onChange(cat: Categorie) {
    this.valeurtmp = cat.id;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.part = [];
    this.part = this.separate(name, ';');
    for (let i = 0; i < this.part.length; i++) {
      this.ListEtiquette.push({label: this.part[i], value: this.part[i]});
    }
  }

  separate(list: string, a: string): string[] {
    this.part = [];
    this.part = list.split(a);
    return this.part;
  }
/*
  delete(selectedEtiquettes: string): void {
    let a: SelectItem;
    this.part = [];
    this.part = this.separate(selectedEtiquettes, ',');
    for (let i = 0; i < this.part.length; i++) {
      a.label = this.part[i];
      a.value = this.part[i];
      let index: number = this.ListEtiquette.indexOf(a);
      if (index !== -1) {
        this.ListEtiquette.splice(index, 1);
      }
    }
  }
*/
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

/*
  getEtiquettes(): void {
    this.etiquetteService
      .getEtiquettes()
      .then(etiquettes => this.etiquettes = etiquettes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.etiquetteService.create(name)
      .then(etiquette => {
        this.etiquettes.push(etiquette);
        this.selectedEtiquette = null;
      });
  }

  delete(etiquette: Etiquette): void {
    this.etiquetteService
      .delete(etiquette.id)
      .then(() => {
        this.etiquettes = this.etiquettes.filter(h => h !== etiquette);
        if (this.selectedEtiquette === etiquette) {
          this.selectedEtiquette = null;
        }
      });
  }*/
}
