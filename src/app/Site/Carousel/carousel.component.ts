// Import Component form the angular core package
import {Component} from '@angular/core';
import {Image} from './image.interface';


// Component Decorator
@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.scss' ]
})

export class CarouselComponent {
  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({source:'app/images/i1.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'app/images/i2.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.images.push({source:'app/images/i3.jpg', alt:'Description for Image 3', title:'Title 3'});
    this.images.push({source:'app/images/i4.jpg', alt:'Description for Image 4', title:'Title 4'});
    this.images.push({source:'app/images/i5.png', alt:'Description for Image 5', title:'Title 5'});
  }
}
