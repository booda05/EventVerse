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
                <Link href="/page-1" className={pathname === '/page-1' ? styles.active : ''}>
                    Standup
                </Link>
            </li>
            <li>
            <Link href="/page-2" className={pathname === '/page-2' ? styles.active : ''}>
                        Speed Dating
                    </Link>
            </li>
            <li>
            <Link href="/Karaoke" className={pathname === '/Karaoke' ? styles.active : ''}f>
                        Karaoké
                    </Link>
            </li>
            <li>
                <Link href="/page-3" className={pathname === '/page-3' ? styles.active : ''}>
                <button className={`${styles.contactButton} ${pathname === '/page-3' ? styles.active : ''}`}>
                            Contactez-nous
                        </button>
                </Link>
            </li>
            
        </ul>
    </nav>
}