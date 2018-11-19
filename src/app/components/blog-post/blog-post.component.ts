import { HttpService } from './../../services/http.service';
import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

import { BlogPost } from './../../models/blogPost';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnChanges {
  @Input() post: BlogPost;
  @Output() postChanged= new EventEmitter();

  postTitle: string;
  postDescription: string;
  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes && changes.post && changes.post.currentValue) {
      this.postTitle = changes.post.currentValue.title;
      this.postDescription = changes.post.currentValue.description;
    }
  }

  public saveChanges(): void {
    if (this.postTitle.length > 0 && this.postDescription.length > 0) {
      this.post.title = this.postTitle;
      this.post.description = this.postDescription;
      if (this.post.id) {
        this.editPost();
      } else {
        this.addPost();
      }
    }
  }

  private addPost() {
    this.post.id = Math.floor(Math.random() * 3000);
    this.httpService.postPost(this.post).subscribe(response => {
      console.log(response);
      // this.getPostsFromAPI();
      this.postChanged.emit(true);
    });
  }

  private editPost() {
    this.httpService.putPost(this.post).subscribe(response => {
      console.log(response);
      // this.getPostsFromAPI();
      this.postChanged.emit(true);
    });
  }
}
