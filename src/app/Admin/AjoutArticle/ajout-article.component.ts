import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {ArticleService} from '../../Service/ArticleService';
import {Categorie} from '../../Model/Categorie';
import {SousCategorie} from '../../Model/SousCategorie';
import {SelectItem} from 'primeng/primeng';
@Component({
  selector: 'my-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss', ]
})

export class AjoutArticleComponent implements OnInit {
  categories: Categorie[]; // liste pour récuperer tous les catégories
  souscategories: Categorie[];
  selectedCategorie: Categorie;
  selectedSousCategorie: SousCategorie;
  checked: boolean = false;
  listCategorieSousCategorie: SelectItem[];
  ListEtiquette: SelectItem[];
  part: string[];
  nomfichier: string;
  selectedCategorieSousCategorie: string;
  selectedEtiquettes: string;

  constructor( private CategorieService: CategoriesService, private articleservice: ArticleService
              /*private etiquetteService: EtiquetteService*/) {

    this.listCategorieSousCategorie = [];
    this.ListEtiquette = [];
  }
  onChangeCategorie(cat: Categorie) {
    this.selectedCategorie = cat;
    this.selectedSousCategorie = null;
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

  addCategorie(nameCategorie: string, nameSousCategorie: string, idCatSousCat: number): void{
    let nomCategorieEtNomSousCategorie = nameCategorie.concat(' -> '+nameSousCategorie);
    if(this.listCategorieSousCategorie.length != 0){
      if(this.listCategorieSousCategorie.every(catSousCat => catSousCat.value !== idCatSousCat)){
        this.listCategorieSousCategorie.push({label:nomCategorieEtNomSousCategorie, value: idCatSousCat });
      }
    }else {
      this.listCategorieSousCategorie.push({label:nomCategorieEtNomSousCategorie, value: idCatSousCat });
    }

  }
  deleteCategorie(selectedCatSousCat: string[]): void {
    var index = -1;
    selectedCatSousCat.forEach(catSousCatToDelete => {
      for(var i = 0, len = this.listCategorieSousCategorie.length; i < len; i++) {
        if (this.listCategorieSousCategorie[i].value === catSousCatToDelete) {
          index = i;
          break;
        }
      }
      if (index > -1) {
        this.listCategorieSousCategorie.splice(index, 1);
      }
     })
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
  ngOnInit(): void {
    this.getCategorie();
  }

  count() {
  }

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
   }
  image(event: any) {
    let file = event.xhr;
    if (file.readyState == 4 && file.status == 200) {
      this.nomfichier = 'php/uploads/' + file.responseText;
    }
  }
}
