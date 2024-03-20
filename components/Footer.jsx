import styles from "./Footer.module.css";
import Link from 'next/link';
export default function Footer() {
    return <footer className={styles.footer}>
        &copy;  Collège La Cité
        <Link href="/Contact" className={styles.contactLink}>
               Contact
        </Link>
    </footer>
}