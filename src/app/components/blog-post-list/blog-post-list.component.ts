import { BlogPost } from './../../models/blogPost';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  public posts: Array<BlogPost>;

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.getPostsFromAPI();
  }

  public deletePost(postId: number) {
    this.httpService.deletePost(postId).subscribe(response => console.log(response));
  }

  private getPostsFromAPI() {
    this.httpService.getPosts().subscribe((response: BlogPost[]) => {
      this.posts = response;
    });
  }
}
