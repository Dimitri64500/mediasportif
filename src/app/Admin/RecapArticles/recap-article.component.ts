import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {Article} from '../../Model/Article';
//import {ConfirmationService, Message} from 'primeng/primeng';

@Component({
  selector: 'my-recap-article',
  templateUrl: './recap-article.component.html',
  styleUrls: ['./recap-article.component.scss', ]
})

export class RecapArticleComponent implements OnInit {
  articles: Article[];
  selectedArticles: Article;
  //msgs: Message[] = [];

  constructor(
    private articleService: ArticleService,
    //private confirmationService: ConfirmationService
    ) { }

  getArticles(): void {
    this.articleService.getArticlesWithAuthor().then(articles => this.articles = articles);
  }

  ngOnInit(): void {
    this.getArticles();
  }

  deleteArticles(tableArticles: Article[]): void {
    this.confirmationService.confirm({
      message: 'Êtes vous sur de vouloir supprimer ces articles ?',
      header: 'Confirmation de suppression',
      icon: 'fa fa-trash',
      accept: () => {
        let tableId: number[];
        tableId = [];
        for (let i = 0; i < tableArticles.length; i++) {
          tableId.push(tableArticles[i].id);
        }
          //this.articleService.deleteArticles(tableId);
        this.articles = [];
        this.ngOnInit();
      }
    });
  }

  modifyArticles(tableArticles: Article[]): void {
    for (let i = 0; i < tableArticles.length; i++) {
    }
  }

  isSelected(tableArticles: Article[]): boolean {
    if (tableArticles.length > 0) {
      return true;
    }
    return false;
  }

  isSelectedOne(tableArticles: Article[]): boolean {
    if ( tableArticles.length === 1) {
      return true;
    }
    return false;
  }
}
