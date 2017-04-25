import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../Service/ArticleService';
import {ArticleNote} from '../../Model/ArticleNote';

@Component({
  selector: 'my-timeline',
  templateUrl: './timeline.component.html' ,
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  articlesNotes: ArticleNote[];

  constructor(
    private articleService: ArticleService ) { }

  getArticlesNotes(): void {
    this.articleService.getArticlesNotes().then(res => this.articlesNotes = res);
  }

  ngOnInit(): void {
    this.getArticlesNotes();
  }

}
