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
                    Date
                </a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('page2')}>
                    Comedie
                </a>
            </li>
        </ul>
    </nav>
}