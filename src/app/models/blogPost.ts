import { BlogPostComment } from './blogPostComment';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  comments: Array<BlogPostComment>;
}
