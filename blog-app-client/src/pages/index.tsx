import Loader from "@/shared/Loader/Loader";
import router from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function HomePage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push("/dashboard");
      } else {
        router.push("/auntification");
      }
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Blog App</h1>
      <p className={styles.description}>
        This is your blog management application. You can create, edit, and
        manage your blog posts here.
      </p>
    </div>
  );
}
