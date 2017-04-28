import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {Article} from '../../Model/Article';

@Component({
  selector: 'my-recap-article',
  templateUrl: './recap-article.component.html',
  styleUrls: ['./recap-article.component.scss', ]
})

export class RecapArticleComponent implements OnInit {
  articles: Article[];

  constructor(
    private articleService: ArticleService ) { }

  getArticles(): void {
    this.articleService.getArticlesWithAuthor().then(articles => this.articles = articles);
  }
  ngOnInit(): void {
    this.getArticles();
  }

}
