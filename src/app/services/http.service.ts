import { Settings } from '../utils/settings';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from '../models/blogPost';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL);
  }

  public deletePost(postId: number): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('id', postId.toString());

    return this.httpClient.delete(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL, { params: httpParams });
  }
}
