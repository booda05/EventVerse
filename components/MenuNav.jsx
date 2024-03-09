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
