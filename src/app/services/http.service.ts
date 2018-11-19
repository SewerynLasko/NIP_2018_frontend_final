import { HttpClient, HttpParams } from '@angular/common/http';
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

  public postPost(post: BlogPost): Observable<any> {
    return this.httpClient.post(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL, post);
  }

  public putPost(post: BlogPost): Observable<any> {
    return this.httpClient.put(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL + '/' + post.id, post);
  }

  public getPagedPosts(pageSize: number, pageIndex: number = -1): Observable<BlogPost[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams
      .append('pageIndex', pageIndex.toString())
      .append('pageSize', pageSize.toString());

    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<BlogPost[]>(environment.ENDPOINT_URL + Settings.BLOG_POSTS_V2_CONTROLLER_URL, { params: httpParams });
  }
}
