import React from 'react';
import MenuNav from './MenuNav'; // Assurez-vous que le chemin d'importation est correct
import styles from './header.module.css'; // Assumer l'existence d'un fichier CSS pour le style

interface HeaderProps {
  setPage: (page: string) => void; // Fonction pour changer la page
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header className={styles.header}>
      <h1>Show Events</h1>
      <MenuNav setPage={setPage} />
    </header>
  );
}

export default Header;
