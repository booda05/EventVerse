import Link from "next/link"
import Image from "next/image"
import MenuNav from "./MenuNav"

import styles from "./Header.module.css"


export default function Header() {
    return <header className={styles.header}>
        <Link className={styles.title} href="/">
            <h1>Event Verse</h1>
        </Link>
        <MenuNav />
    </header>
}