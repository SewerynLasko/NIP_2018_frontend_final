import { Component, OnInit } from '@angular/core';

import { BlogPost } from './../../models/blogPost';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  public posts: BlogPost[] = [];
  public pageSize: number = 3;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPostsFromAPI();
  }

  public deletePost(postId: number): void {
    this.httpService.deletePost(postId).subscribe(response => console.log(response));
  }

  public addPost(post: BlogPost): void {
    post = { title: 'NiceNewPost', description: '123', comments: null };

    this.httpService.postPost(post).subscribe(response => {
      console.log(response);
      this.getPostsFromAPI();
    });
  }

  public editPost(post: BlogPost): void {
    post.description += 'Mod';
    this.httpService.putPost(post).subscribe(response => {
      console.log(response);
      this.getPostsFromAPI();
    });
  }

  public getPagedPosts(): void {
    this.httpService.getPagedPosts(this.pageSize).subscribe((response: BlogPost[]) => {
      this.posts = response;

    });
  }

  private getPostsFromAPI(): void {
    this.httpService.getPosts().subscribe((response: BlogPost[]) => {
      this.posts = response;

      this.getPagedPosts();
    });
  }
}
