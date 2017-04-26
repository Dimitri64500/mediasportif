// Import Component form the angular core package
import {Component} from '@angular/core';
import {Image} from './image.interface';
import {Router} from '@angular/router';


// Component Decorator
@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
  images: any[];
  constructor(private router: Router) {}

  ngOnInit() {
    this.images = [];
    this.images.push({id: 1, source: 'app/images/i1.jpg', alt: 'Description for Image 1', title: 'Title 1', url: 'article/:id'});
    this.images.push({id: 2, source: 'app/images/i2.jpg', alt: 'Description for Image 2', title: 'Title 2', url: 'article/:id'});
    this.images.push({id: 3, source: 'app/images/i3.jpg', alt: 'Description for Image 3', title: 'Title 3', url: 'article/:id'});
    this.images.push({id: 4, source: 'app/images/i4.jpg', alt: 'Description for Image 4', title: 'Title 4', url: 'www.google.com'});
    this.images.push({id: 5, source: 'app/images/i5.png', alt: 'Description for Image 5', title: 'Title 5', url: 'www.google.com'});
  }
  redirect(event: any) {
    let id = event.image.id;
    this.router.navigate([event.image.url], id);
  }
}
