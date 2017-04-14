// Import Component form the angular core package
import {Component} from '@angular/core';
import {Image} from './image.interface';

// IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { 'title': 'Coupe UK', 'url': 'app/images/i1.jpg' },
  { 'title': 'Jeux Olympiques', 'url': 'app/images/i2.jpg' },
  { 'title': '', 'url': 'app/images/i3.jpg' },
  { 'title': 'Potter Me', 'url': 'app/images/i4.jpg' },
  { 'title': 'Potter Me', 'url': 'app/images/i5.png' }
];

// Component Decorator
@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
})

export class CarouselComponent {
  public images = IMAGES;
}
