import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../Model/Article';

@Component({
  selector: 'my-pagearticle',
  templateUrl: './pagearticle.component.html',
  styleUrls: ['./pagearticle.component.scss']
})
export class PageArticleComponent implements OnInit {

  @Input() article: Article;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.articleService.getArticle(params['url']))
      .subscribe(article => this.article = article);
  }
}

