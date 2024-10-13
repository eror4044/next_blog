import styles from './index.module.scss';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Blog App</h1>
      <p className={styles.description}>
        This is your blog management application. You can create, edit, and manage your blog posts here.
      </p>
    </div>
  );
}
