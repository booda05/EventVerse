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