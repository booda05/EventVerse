<<<<<<< HEAD
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './MenuNav.module.css'

export default function MenuNav() {
    const pathname = usePathname();

    return <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/" className={pathname === '/' ? styles.active : ''}>
                    Accueil
                </Link>
            </li>
            <li>
                <Link href="/Page1" className={pathname === '/Page1' ? styles.active : ''}>
                   Speed Dating
                </Link>
            </li>
            <li>
                <Link href="/Page2" className={pathname === '/Page2' ? styles.active : ''}>
                    Stand Up
                </Link>
            </li>
        </ul>
    </nav>
}
=======
import Link from "next/link";

export default function MenuNav() {
    return (
        // Structure de votre composant MenuNav
        <nav>
            <ul>
                <li>
                    <Link href="/index"><a>Accueil</a></Link>
                </li>
                <li>
                    <Link href="/page1"><a>Page 1</a></Link>
                </li>
                <li>
                    <Link href="/page2"><a>Page 2</a></Link>
                </li>
            </ul>
        </nav>
    );
}
>>>>>>> 08ecbe391f9cde44e88ef6e4144c1ebbdbb18d7b
