import mongoose, { Schema, Document } from "mongoose";
import { Request } from "express";
interface IPost extends Document {
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

const postSchema: Schema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  comment_id: {
    type: String,
    required: true,
    unique: true,
  },
  feature_image: {
    type: String,
    required: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  visibility: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: false,
  },
  reading_time: {
    type: Number,
    required: false,
    default: 0,
  },
});
export const Post = mongoose.model<IPost>("Post", postSchema);

// types/PostRequest.ts
export interface CreatePostRequest extends Request {
  body: {
    title: string;
    content: string;
    author: string;
  };
}

export interface UpdatePostRequest extends Request {
  body: {
    title: string;
    content: string;
  };
  params: {
    id: string;
  };
}

export interface GetPostByIdRequest extends Request {
  params: {
    id: string;
  };
}

export interface DeletePostRequest extends Request {
  params: {
    id: string;
  };
}
