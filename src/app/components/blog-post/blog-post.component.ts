import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { BlogPost } from './../../models/blogPost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnChanges {
  @Input() post: BlogPost;
  postTitle: string;
  postDescription: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
