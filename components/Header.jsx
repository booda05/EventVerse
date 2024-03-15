<<<<<<< HEAD
import Link from "next/link";
import MenuNav from "./MenuNav";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <span className={styles.title}>
                    <h1>Event Verse</h1>
                </span>
            </Link>
            <MenuNav />
        </header>
    );
}

=======
import Link from "next/link";
import Image from "next/image";
import MenuNav from "./MenuNav";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <span className={styles.title}>
                    <h1>Event Verse</h1>
                </span>
            </Link>
            <MenuNav />
        </header>
    );
}

>>>>>>> 08ecbe391f9cde44e88ef6e4144c1ebbdbb18d7b
