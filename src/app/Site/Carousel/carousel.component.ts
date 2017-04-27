// Import Component form the angular core package
import {Component} from '@angular/core';
import {Image} from './image.interface';
import {Router} from '@angular/router';
import {ArticleService} from '../../Service/ArticleService';
import {Article} from '../../Model/Article';



// Component Decorator
@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  articles: Article[];
  images: any[];
  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticlesALaUne();
  }

  getArticlesALaUne() {
    this.images = [];
    this.articleService.getArticlesALaUne().then(res => {this.articles = res;
      this.articles.forEach(article => {
        this.images.push({source: article.imagealaune, alt: article.resume, title: article.titre, url: article.url});
      });
    });
  }
  redirect(event: any) {
    let url = event.image.url;
    this.router.navigate(['/article', url]);
  }
}
