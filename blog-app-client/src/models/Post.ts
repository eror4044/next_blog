export interface Post {
  _id: string;
  slug?: string;
  uuid?: string;
  title: string;
  html: string;
  comment_id?: string;
  feature_image: string;
  featured?: boolean;
  visibility: "public" | "private";
  createdBy: string;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  url?: string;
  excerpt?: string;
  reading_time?: number;
}

export interface CreatePostData {
  createdBy: string;
  title: string;
  html: string;
  slug?: string;
  feature_image?: File | null;
}
export interface CreatePostDataDTO extends Post {
  
}
export interface UpdatePostData {
  title: string;
  content: string;
}
