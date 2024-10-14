import { Post } from "@/models/Post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../actions";

interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(getPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostById.fulfilled, (state, action: PayloadAction<Post>) => {
        state.status = "succeeded";
        state.posts = [action.payload];
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
        const index = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      });
  },
});

export default postSlice.reducer;
