"use client";

import { useState } from "react";
import styles from "./CreatePost.module.scss";
import { CreatePostData, Post } from "@/models/Post";
import { useAppDispatch } from "@/redux/store";
import { createPost } from "@/redux/actions";
import ReactMarkdown from "react-markdown";
import Dropzone from "react-dropzone";
import rehypeRaw from "rehype-raw";

export default function CreatePost() {
  const [createdPost, setCreatedPost] = useState<CreatePostData>(
    {} as CreatePostData
  );
  const [mainImage, setMainImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: CreatePostData = {
      ...createdPost,
    };
    if (mainImage) {
      data.feature_image = mainImage;
    }

    dispatch(createPost(data));

    setCreatedPost({} as CreatePostData);
    setMainImage(null);
  };

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        encType="multipart/form-data"
      >
        <h1>Create New Post</h1>

        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={createdPost.title}
            onChange={(e) =>
              setCreatedPost({ ...createdPost, title: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={createdPost.createdBy}
            onChange={(e) => setCreatedPost({ ...createdPost, createdBy: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mainImage">Main Image</label>
          <Dropzone onDrop={(acceptedFiles) => setMainImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <div className={styles.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                {mainImage ? (
                  <p>{mainImage.name}</p>
                ) : (
                  <p>Drop the main image, or click to select one</p>
                )}
              </div>
            )}
          </Dropzone>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={createdPost.html}
            onChange={(e) => setCreatedPost({...createdPost, html: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Markdown Preview</label>
          <div className={styles.markdownPreview}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{createdPost.html}</ReactMarkdown>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
