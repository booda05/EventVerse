import React from 'react';
import styles from "./MenuNav.module.css";

interface MenuNavProps {
  setPage: (page: string) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({ setPage }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#" onClick={() => setPage('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage('events')}>
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNav;
