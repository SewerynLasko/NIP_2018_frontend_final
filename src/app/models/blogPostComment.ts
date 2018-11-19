export class BlogPostComment implements BlogPostComment {
  constructor() {
    this.author = '';
    this.content = '';
  }
}

export interface BlogPostComment {
  author: string;
  content: string;
}
