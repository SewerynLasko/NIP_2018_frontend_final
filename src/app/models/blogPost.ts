import { BlogPostComment } from './blogPostComment';

export class BlogPost implements BlogPost {
  constructor() {
    this.id = null;
    this.title = '';
    this.description = '';
    this.comments = new Array<BlogPostComment>();
  }
}

export interface BlogPost {
  id?: number;
  title: string;
  description: string;
  comments: Array<BlogPostComment>;
}
