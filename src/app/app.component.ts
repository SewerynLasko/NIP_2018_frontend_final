import { Component, OnInit } from '@angular/core';
import { BlogPost } from './models/blogPost';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public post: BlogPost = { id: 1, title: 'SomeTitle', description: 'somebody', comments: null };
  public posts: BlogPost[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  public addPost() {
    this.httpService.postPosts(this.post).subscribe((response: BlogPost) => {
      console.log(response);
    });
  }
}
