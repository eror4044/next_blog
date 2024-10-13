"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useAuth,
  SignedOut,
  SignedIn,
  SignInButton,
} from "@clerk/nextjs";
import Loader from "../../shared/Loader/Loader";
import styles from "./Auntification.module.scss";

export default function AuthPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push("/dashboard");
      }
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.authSection}>
        <SignedOut>
          <div className={styles.buttonContainer}>
            <h2>Welcome to Blog App</h2>
            <div className={styles.button}>
              <SignInButton>Sign In</SignInButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className={styles.buttonContainer}>
            <h2>Welcome back!</h2>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
