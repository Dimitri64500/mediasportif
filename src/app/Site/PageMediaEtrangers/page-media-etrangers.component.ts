import {Component, NgModule, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';
import {Categorie} from '../../Model/Categorie';
import {CategoriesService} from '../../Service/CategorieService';
import {SelectItem} from 'primeng/primeng';
import {SousCategorie} from '../../Model/SousCategorie';
import {FiltreArticle} from '../filtre-sous-cat';




@Component({
  selector: 'my-pagemediaetrangers',
  templateUrl: './page-media-etrangers.component.html',
  styleUrls: ['./page-media-etrangers.component.scss'],
})

@NgModule({
  declarations: [FiltreArticle],
})

export class MediaEtrangersComponent implements OnInit {

  articlesMediaEtrangers: ArticleNote[];
  categories: Categorie[];
  sousCategories: SousCategorie[];
  sousCategoriesFront: SelectItem[];

  selectedSousCat: number[];

  constructor(private articleService: ArticleService,
              private categorieService: CategoriesService) {
  }

  getCategorie(): void {
    this.categorieService.getCategories().then(categories => {
      this.categories = categories.filter(t => t.idcategorie == 3);
      this.sousCategories = this.categories[0].sousCategorie;

      // mise en tableau des sous-catégories pour affichage.
      this.sousCategoriesFront = [];
      this.sousCategories.forEach(sousc => this.sousCategoriesFront.push({
        label: sousc.nomsouscategorie,
        value: sousc.idsouscategorie
      }));
    });
  }

  getArticlesByCategorie(categorie: Number): void {
    this.articleService.getArticlesByCategorie(categorie)
      .then(
        res => {
          this.articlesMediaEtrangers = res;
        });
  }

  ngOnInit(): void {
    this.getCategorie();
    this.getArticlesByCategorie(3);
  }

}
