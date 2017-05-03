import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {ArticleService} from '../../Service/ArticleService';
import {Categorie} from '../../Model/Categorie';
import {SousCategorie} from '../../Model/SousCategorie';
import {Message, SelectItem} from 'primeng/primeng';
import {Article} from "../../Model/Article";
import {Router} from "@angular/router";
@Component({
  selector: 'my-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss',]
})

export class AjoutArticleComponent implements OnInit {
  categories: Categorie[]; // liste pour récuperer tous les catégories
  selectedCategorie: Categorie;
  selectedSousCategorie: SousCategorie;
  article: Article = new Article;
  temp = {alaune: false};
  id: number;
  listCategorieSousCategorie: SelectItem[];
  ListEtiquette: SelectItem[];
  part: string[];
  selectedCategorieSousCategorie: string;
  selectedEtiquettes: string;
  msgs: Message[] = [];

  constructor(private router: Router,private CategorieService: CategoriesService, private articleservice: ArticleService) {
    this.listCategorieSousCategorie = [];
    this.ListEtiquette = [];
  }

  onChangeCategorie(cat: Categorie) {
    this.selectedCategorie = cat;
    this.selectedSousCategorie = null;
  }

  separate(list: string, a: string): string[] {
    this.part = [];
    this.part = list.split(a);
    return this.part;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.part = [];
    this.part = this.separate(name, ';');
    for (let i = 0; i < this.part.length; i++) {
      if (this.exist(this.part[i]) !== -1 && this.exist(this.part[i]) !== undefined) {
      } else {
        this.ListEtiquette.push({label: this.part[i], value: this.part[i]});
      }
    }
  }

  exist(a: string): number {
    let index: number;
    for (let i = 0; i < this.ListEtiquette.length; i++) {
      if (this.ListEtiquette[i].value === a) {
        index = i;
        i = this.ListEtiquette.length;
      } else {
        index = -1;
      }
    }
    return index;
  }

  addCategorie(nameCategorie: string, nameSousCategorie: string, idCatSousCat: number): void {
    let nomCategorieEtNomSousCategorie = nameCategorie.concat(' -> ' + nameSousCategorie);
    if (this.listCategorieSousCategorie.length !== 0) {
      if (this.listCategorieSousCategorie.every(catSousCat => catSousCat.value !== idCatSousCat)) {
        this.listCategorieSousCategorie.push({label: nomCategorieEtNomSousCategorie, value: idCatSousCat});
      }
    } else {
      this.listCategorieSousCategorie.push({label: nomCategorieEtNomSousCategorie, value: idCatSousCat});
    }

  }

  deleteCategorie(selectedCatSousCat: string[]): void {
    let index = -1;
    selectedCatSousCat.forEach(catSousCatToDelete => {
      for (let i = 0, len = this.listCategorieSousCategorie.length; i < len; i++) {
        if (this.listCategorieSousCategorie[i].value === catSousCatToDelete) {
          index = i;
          break;
        }
      }
      if (index > -1) {
        this.listCategorieSousCategorie.splice(index, 1);
      }
    });
  }


  delete(selectedEti: string[]): void {
    let a: SelectItem;
    for (let i = 0; i < selectedEti.length; i++) {
      a = {label: selectedEti[i], value: selectedEti[i]};
      let index: number;

      index = this.exist(a.value);

      if (index !== -1) {
        this.ListEtiquette.splice(index, 1);
      }
    }
  }

  getCategorie(): void {
    this.CategorieService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategorie();
  }

  count() {
  }

  booleantotinyint() {
    this.temp.alaune ? this.article.alaune = 0 : this.article.alaune = 1;
  }
  show() {
    this.msgs.push({severity:'warn', summary:'Vous devez renseigner tous les champs.'});
    setTimeout(() => {
      this.hide();
    },3000);
  }
  hide() {
    this.msgs = [];
  }
  callApi(status: string) {
    if (!this.article.titre || !this.article.resume || !this.article.texte || (this.listCategorieSousCategorie.length<=0)
      || (this.article.alaune==1 && !this.article.imagealaune)) {
      this.show();
      return;
    }
    this.article.etiquette = "";
    for (let i = 0; i < this.ListEtiquette.length; i++) {
      if(i == this.ListEtiquette.length-1)
        this.article.etiquette += this.ListEtiquette[i].value;
      else
        this.article.etiquette += this.ListEtiquette[i].value +  ";";
    }

    let r = this.article.titre.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/æ/g), "ae");
    r = r.replace(new RegExp(/ç/g), "c");
    r = r.replace(new RegExp(/[èéêë]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/ñ/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/œ/g), "oe");
    r = r.replace(new RegExp(/[ùúûü]/g), "u");
    r = r.replace(new RegExp(/[ýÿ]/g), "y");
    r = r.replace(new RegExp(/[^\w-]/g), "");
    r = r.replace(new RegExp(/\-+/g), "-");
    this.article.url = r;
    this.article.idutilisateur = 1;//TODO
    this.article.activecomment = 1;//TODO
    let sousCategories = [];
    for (let i = 0, len = this.listCategorieSousCategorie.length; i < len; i++) {
      sousCategories.push(this.listCategorieSousCategorie[i].value);
    }
    this.articleservice.addArticles(
      this.article.titre,
      this.article.texte,
      this.article.resume,
      this.article.idutilisateur,
      this.article.url,
      status,
      this.article.etiquette,
      this.article.activecomment,
      this.article.alaune,
      this.article.imagealaune,
      sousCategories
    )
      .then(res =>
      {
        this.router.navigate(['/admin/recaparticle']);
      });
  }

  image(event: any) {
    let file = event.xhr;
    if (file.readyState === 4 && file.status === 200) {
      this.article.imagealaune = 'php/uploads/' + file.responseText;
    }
  }
}
