import { BlogPostComment } from './../../models/blogPostComment';
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
  @Output() postChanged = new EventEmitter();

  postTitle: string;
  postDescription: string;
  commentAuthor: string;
  commentContent: string;
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

  public addComment() {
    if (this.commentAuthor.length > 0 && this.commentContent.length > 0) {
      if (this.post.comments == null) {
        this.post.comments = new Array<BlogPostComment>();
      }

      const comment = new BlogPostComment();
      comment.author = this.commentAuthor;
      comment.content = this.commentContent;
      this.post.comments.push(comment);
    }
  }

  public deleteComment(comment: BlogPostComment) {
    const index = this.post.comments.indexOf(comment);
    this.post.comments.splice(index, 1);
  }

  private addPost() {
    this.post.id = Math.floor(Math.random() * 3000);
    this.httpService.postPost(this.post).subscribe(response => {
      this.postChanged.emit(true);
    });
  }

  private editPost() {
    this.httpService.putPost(this.post).subscribe(response => {
      this.postChanged.emit(true);
    });
  }
}
