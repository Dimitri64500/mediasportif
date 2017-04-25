import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../Service/CategorieService';
import {Categorie} from '../../Model/Categorie';

@Component({
  selector: 'my-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss', ]
})

export class AjoutArticleComponent implements OnInit {
  categories: Categorie[];
  text1: string;
  constructor(
    private CategorieService: CategoriesService ) { }

  getArticles(): void {
    this.CategorieService.getCategories().then(categories => this.categories = categories);
  }
  ngOnInit(): void {
    this.getArticles();
  }
}
