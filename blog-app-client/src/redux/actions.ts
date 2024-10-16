import { CreatePostData, CreatePostDataDTO } from '@/models/Post';
import { uploadImageToCloudinary } from '@/utils/cloudinary';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return await response.json();
});

export const getPostById = createAsyncThunk('posts/getPostById', async (id: string) => {
  const response = await fetch(`/api/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return await response.json();
});

export const createPost = createAsyncThunk(
  'posts/create',
  async (data: CreatePostData, { rejectWithValue }) => {
    try {
      const imageURL = await uploadImageToCloudinary(data.feature_image as File);
      const post: CreatePostDataDTO = {
        ...data, feature_image: imageURL,
        _id: '',
        html: data.html,
        slug: data.slug,
        createdBy: data.createdBy,
        visibility: 'public'
      };
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/posts', post);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
