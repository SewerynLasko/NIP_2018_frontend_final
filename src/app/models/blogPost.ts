import { BlogPostComment } from './blogPostComment';

export class BlogPost implements BlogPost {
  constructor() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.comments = null;
  }
}

export interface BlogPost {
  id?: number;
  title: string;
  description: string;
  comments: Array<BlogPostComment>;
}
