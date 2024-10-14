import { CreatePostData, UpdatePostData } from '@/models/Post';
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
  async (data: { title: string; content: string; author: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/posts', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, data }: { id: string; data: UpdatePostData }) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return await response.json();
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id: string) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return id;
});
