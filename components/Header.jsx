// Importe le composant Image de Next.js pour une optimisation des images.
import Image from "next/image"
// Importe le composant MenuNav, qui est probablement un menu de navigation.
import MenuNav from "./MenuNav"

// Importe les styles CSS spécifiques à ce composant Header.
import styles from "./Header.module.css"

// Importe l'image du logo depuis le dossier public du projet.
import logo from "@/public/logo.png"

// Définit le composant Header. Il prend une prop "setPage" pour changer la page affichée.
export default function Header({setPage}) {
    // Retourne le JSX, le format utilisé pour créer l'interface utilisateur en React.
    return (
        // Crée un élément "header" qui contiendra tout le contenu de l'en-tête.
        <header className={styles.header}>
            {/* Crée un lien cliquable qui, quand cliqué, appelle la fonction setPage avec 'accueil' comme argument.
                Ceci change la page ou le contenu affiché sans recharger la page. */}
            <a className={styles.title} onClick={() => setPage('accueil')}>
                {/* Utilise le composant Image de Next.js pour afficher le logo. Ceci aide à optimiser le chargement des images. */}
               
                <h1>Event Verse</h1>
            </a>
            {/* Insère le composant MenuNav et lui passe la fonction setPage pour qu'il puisse aussi changer de page. */}
            <MenuNav setPage={setPage} />
        </header>
    )
}
