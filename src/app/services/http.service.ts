import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { BlogPost } from '../models/blogPost';
import { Settings } from '../utils/settings';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL);
  }

  public deletePost(postId: number): Observable<any> {
    //let httpParams = new HttpParams();
    //httpParams = httpParams.append('id', postId.toString());

    // return this.httpClient.delete(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL, { params: httpParams });
    return this.httpClient.delete(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL + '/' + postId);
  }
}
