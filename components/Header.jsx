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

