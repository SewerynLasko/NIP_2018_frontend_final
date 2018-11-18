import { Settings } from './utils/settings';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from './models/blogPost';


@Injectable()
export class HttpService {
  private api: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL);
  }

  public postPosts(post: BlogPost): Observable<BlogPost>  {
    return this.httpClient.post<BlogPost>(this.api + '/posts', post);
  }
}
