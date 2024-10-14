import Link from "next/link";
import styles from "./PostsPage.module.scss";

const posts = [
  {
    id: 1,
    title: "How to use Next.js",
    description: "A detailed guide on how to use Next.js in your projects.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description: "An in-depth look at React Hooks and their usage.",
  },
  {
    id: 3,
    title: "CSS Modules in Next.js",
    description: "Learn how to use CSS Modules effectively in Next.js.",
  },
];

export default function PostList() {
  return (
    <div className={styles.postsPage}>
      <div className={styles.header}>
        <h1>Blog Posts</h1>
        <Link href="/posts/createPost">
          <button className={styles.createPostButton}>Create Post</button>
        </Link>
      </div>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
