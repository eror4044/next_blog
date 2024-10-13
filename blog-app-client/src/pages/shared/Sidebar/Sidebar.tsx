import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCog,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import { UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/dashboard" className={styles.navItem}>
              <FontAwesomeIcon icon={faTachometerAlt} className={styles.icon} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/posts" className={styles.navItem}>
              <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
              Posts
            </Link>
          </li>
          <li>
            <Link href="/settings" className={styles.navItem}>
              <FontAwesomeIcon icon={faCog} className={styles.icon} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.bottomActions}>
        <UserButton />
      </div>
    </aside>
  );
}
