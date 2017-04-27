import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';

@Component({
  selector: 'my-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  articlesNotes: ArticleNote[];

  constructor(private articleService: ArticleService) {
  }

  getArticlesNotes(): void {
    this.articleService.getArticlesNotes().then(res => this.articlesNotes = res);
  }

  ngOnInit(): void {
    this.getArticlesNotes();
  }
}
