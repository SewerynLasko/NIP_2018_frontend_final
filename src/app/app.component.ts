import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public post: Post = { title: 'SomeTitle', body: 'somebody' };
  public posts: Post[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPostsData();
  }

  public addPost() {
    this.httpService.postPosts(this.post).subscribe(
      (response: Post) => {
        console.log(response);
      }
    );
  }

  private getPostsData() {
    this.httpService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
