import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { BlogPost } from './models/blogPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public post: BlogPost = { title: 'SomeTitle', description: 'somebody', comments: null };
  public posts: BlogPost[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPostsData();
  }

  public addPost() {
    this.httpService.postPosts(this.post).subscribe(
      (response: BlogPost) => {
        console.log(response);
      }
    );
  }

  private getPostsData() {
    this.httpService.getPosts().subscribe((posts: BlogPost[]) => {
      this.posts = posts;
    });
  }
}
