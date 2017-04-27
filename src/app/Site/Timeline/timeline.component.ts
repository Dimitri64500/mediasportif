import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';

@Component({
  selector: 'my-timeline',
  templateUrl: './timeline.component.html' ,
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent {

  @Input('TimelineDatas') TimelineDatas: ArticleNote[];

  constructor(private el: ElementRef){}

}
