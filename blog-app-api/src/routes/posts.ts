import express from "express";
import { Response } from "express";
import {
  CreatePostRequest,
  DeletePostRequest,
  GetPostByIdRequest,
  Post,
  UpdatePostRequest,
} from "../models/Post";
import mongoose from "mongoose";

const router = express.Router();

// @route   GET /api/posts
// @desc    Get all posts
router.get("/", async (req: Request, res: any) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/posts/:id
// @desc    Get a single post by ID
router.get("/:id", async (req: GetPostByIdRequest, res: any) => {
  try {
    console.log(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/posts
// @desc    Create a new post
router.post("/", async (req: CreatePostRequest, res: Response) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   PUT /api/posts/:id
// @desc    Update a post
router.put("/:id", async (req: UpdatePostRequest, res: any) => {
  try {
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = title;
    post.html = content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/posts/:id
// @desc    Delete a post
router.delete("/:id", async (req: DeletePostRequest, res: any) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
