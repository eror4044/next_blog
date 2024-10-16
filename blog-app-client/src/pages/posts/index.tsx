import Link from "next/link";
import styles from "./PostsPage.module.scss";
import { Post } from "@/models/Post";
import Image from "next/image";

const posts = [
  {
    _id: "5f5f1cfc33b1e72b1c8e2f1c",
    slug: "welcome-to-nextjs",
    title: "Welcome to Next.js",
    html: "<p>Welcome to the Next.js blog! This is the first post.</p>",
    feature_image: "https://example.com/nextjs-image.jpg",
    visibility: "public",
    createdAt: new Date("2021-01-15T10:00:00.000Z"),
    updatedAt: new Date("2021-01-16T12:00:00.000Z"),
    publishedAt: new Date("2021-01-16T12:00:00.000Z"),
  },
  {
    _id: "5f5f1cfc33b1e72b1c8e2f1d",
    slug: "react-hooks-guide",
    title: "A Comprehensive Guide to React Hooks",
    html: "<p>Learn everything you need to know about React Hooks.</p>",
    feature_image: "https://example.com/react-hooks.jpg",
    visibility: "public",
    createdAt: new Date("2021-02-20T10:00:00.000Z"),
    updatedAt: new Date("2021-02-21T12:00:00.000Z"),
    publishedAt: new Date("2021-02-21T12:00:00.000Z"),
  },
  {
    _id: "5f5f1cfc33b1e72b1c8e2f1e",
    slug: "css-modules-nextjs",
    title: "Using CSS Modules in Next.js",
    html:
      "<p>Learn how to effectively use CSS Modules in your Next.js projects.</p>",
    feature_image: "https://example.com/css-modules.jpg",
    visibility: "public",
    createdAt: new Date("2021-03-10T10:00:00.000Z"),
    updatedAt: new Date("2021-03-11T12:00:00.000Z"),
    publishedAt: new Date("2021-03-11T12:00:00.000Z"),
  },
  {
    _id: "5f5f1cfc33b1e72b1c8e2f1f",
    slug: "optimizing-nextjs-performance",
    title: "Optimizing Performance in Next.js",
    html:
      "<p>Discover tips and techniques for optimizing your Next.js app's performance.</p>",
    feature_image: "https://example.com/nextjs-performance.jpg",
    visibility: "public",
    createdAt: new Date("2021-04-05T10:00:00.000Z"),
    updatedAt: new Date("2021-04-06T12:00:00.000Z"),
    publishedAt: new Date("2021-04-06T12:00:00.000Z"),
  },
] as Post[];

export default function PostList() {
  return (
    <div className={styles.postsPage}>
      <div className={styles.header}>
        <h1>Blog Posts</h1>
        <Link href="/posts/createPost">
          <button className={styles.createPostButton}>Create Post</button>
        </Link>
      </div>
      <div className={styles.postList_wrapper}>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post._id} className={styles.postItem}>
              <Link href={`/posts/${post._id}`}>
                <Image
                  src={post.feature_image}
                  alt={post._id}
                  className={styles.postImage}
                />
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
