import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from '../../Model/Article';
import {User} from '../../Model/User';
import {UserService} from '../../Service/UserService';
import {Status} from '../../Model/Status';

@Component({
  selector: 'my-pagearticle',
  templateUrl: './pagearticle.component.html',
  styleUrls: ['./pagearticle.component.scss']
})

export class PageArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() user: User;
  Status: typeof Status = Status;


  constructor(private articleService: ArticleService,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(params['url']))
      .subscribe(article => {
        this.article = article;
        if (this.article.status.toString() != this.Status[0]){
          this.article = undefined;
        }else{
          this.userService.getUserbById(this.article.idutilisateur).then(user => this.user = user);
        }
      });
  }
}

