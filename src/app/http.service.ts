import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';


@Injectable()
export class HttpService {
  private api: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.api + '/posts');
  }

  public postPosts(post: Post): Observable<Post>  {
    return this.httpClient.post<Post>(this.api + '/posts', post);
  }
}
