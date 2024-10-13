import { useRouter } from 'next/router';
import styles from './PostsPage.module.scss';

const posts = [
  { id: 1, title: 'How to use Next.js', description: 'A detailed guide on how to use Next.js in your projects.', content: 'This is the full content of the post on how to use Next.js...' },
  { id: 2, title: 'Understanding React Hooks', description: 'An in-depth look at React Hooks and their usage.', content: 'This is the full content of the post on understanding React Hooks...' },
  { id: 3, title: 'CSS Modules in Next.js', description: 'Learn how to use CSS Modules effectively in Next.js.', content: 'This is the full content of the post on CSS Modules in Next.js...' },
];

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles.postPage}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div className={styles.content}>
        {post.content}
      </div>
    </div>
  );
}
