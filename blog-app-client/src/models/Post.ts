export interface Post {
    _id: string;
    slug: string;
    uuid: string;
    title: string;
    html: string;
    comment_id: string;
    feature_image: string;
    featured: boolean;
    visibility: "public" | "private";
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    url: string;
    excerpt: string;
    reading_time: number;
  }
  
  export interface CreatePostData {
    title: string;
    content: string;
    author: string;
  }
  
  export interface UpdatePostData {
    title: string;
    content: string;
  }