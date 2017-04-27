import {AfterViewInit, Component} from '@angular/core';

// Component Decorator
@Component({
  selector: 'my-twitter',
  templateUrl: './twitter.component.html'
})

export class TwitterComponent implements AfterViewInit {
  constructor() {
  }

  ngAfterViewInit () {
    !function(d,s,id){
      var js: any,
        fjs=d.getElementsByTagName(s)[0],
        p='https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
      }
    }
    (document,"script","twitter-wjs");
  }
}
