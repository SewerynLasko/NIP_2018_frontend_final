import { BlogPost } from './blogPost';

export interface PaginatedItems {
  pageIndex: number;
  pageSize: number;
  totalItems: number;
  items: BlogPost[];
  nextPage: string;
}
