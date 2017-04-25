import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../../Service/CategorieService';
import {Categorie} from '../../Model/Categorie';

@Component({
  selector: 'my-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss', ],
  inputs:['activeColor','baseColor','overlayColor']
})

export class AjoutArticleComponent implements OnInit {
  categories: Categorie[];
  text1: string;
  constructor(
    private CategorieService: CategorieService ) { }

  getArticles(): void {
    this.CategorieService.getCategories().then(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getArticles();
  }
}
