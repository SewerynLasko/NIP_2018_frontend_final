import { BlogPostComment } from './blogPostComment';

export interface BlogPost {
  title: string;
  description: string;
  comments: Array<BlogPostComment>;
}
