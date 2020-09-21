import { Post } from './../../../../models/Post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 @Input()
post: Post
  constructor() { }
  
  ngOnInit(): void {
  }

}
