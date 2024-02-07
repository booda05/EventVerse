import styles from "./MenuNav.module.css"

export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
        <ul>
        <li>
                <a href="#" onClick={() => setPage('accueil')}>
                    Accueil
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('page1')}>
                    Events
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('page2')}>
                    About
                </a>
            </li>
        </ul>
    </nav>
}