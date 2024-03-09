'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './MenuNav.module.css'

export default function MenuNav() {
    const pathname = usePathname();

    return <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/index" className={pathname === '/index' ? styles.active : ''}>
                    Accueil
                </Link>
            </li>
            <li>
                <Link href="/page1" className={pathname === '/page1' ? styles.active : ''}>
                    Page 1
                </Link>
            </li>
            <li>
                <Link href="/page2" className={pathname === '/page2' ? styles.active : ''}>
                    Page 2
                </Link>
            </li>
        </ul>
    </nav>
}