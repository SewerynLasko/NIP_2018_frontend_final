import { Component, OnInit } from '@angular/core';

import { PaginatedItems } from 'app/models/paginatedPosts';

import { BlogPost } from './../../models/blogPost';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  public posts: BlogPost[] = [];
  public post: BlogPost;
  public pageSize: number = 3;
  public editMode: boolean;
  public totalPosts: number = 0;
  public selectedPageIndex: number = 0;
  //public pageLinks: number = 2;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getPostsFromAPI();
    this.editMode = false;
  }

  onPageChange(event) {
    if (event && event.first && event.rows) {
      this.getPagedPosts(event.first / event.rows);
    }
  }

  public deletePost(postId: number): void {
    this.httpService.deletePost(postId).subscribe(response => console.log(response));
  }

  public addPost(post: BlogPost): void {
    this.editMode = true;
    this.post = new BlogPost();
    // post = { title: 'NiceNewPost', description: '123', comments: null };

    // this.httpService.postPost(post).subscribe(response => {
    //   console.log(response);
    //   this.getPostsFromAPI();
    // });
    // var post2 = { id: 22, title: 'NiceNewPost' + Date.now().toString(), description: '123', comments: null };

    // this.httpService.postPost(post2).subscribe(response => {
    //   console.log(response);
    //   this.getPostsFromAPI();
    // });
  }

  public editPost(post: BlogPost): void {
    this.editMode = true;
    this.post = post;
    // post.description += 'Mod';
    // this.httpService.putPost(post).subscribe(response => {
    //   console.log(response);
    //   this.getPostsFromAPI();
    // });
  }

  public getPagedPosts(pageNumber: number = 0): void {
    this.httpService.getPagedPosts(this.pageSize, pageNumber).subscribe((response: PaginatedItems) => {
      if (response && response.items) {
        this.posts = new Array<BlogPost>(response.totalItems);
        this.posts.splice(pageNumber * this.pageSize, response.items.length, ...response.items);
        this.posts = response.items;
        this.totalPosts = response.totalItems;
      }
    });
  }

  private getPostsFromAPI(): void {
    this.httpService.getPosts().subscribe((response: BlogPost[]) => {
      this.posts = response;
      this.getPagedPosts();
    });
  }
}
