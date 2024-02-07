import React from 'react';
import styles from "./MenuNav.module.css";

interface MenuNavProps {
  setPage: (page: string) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({ setPage }) => {
  const handleClick = (page: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/home" onClick={(e) => handleClick('home', e)}>
            Home
          </a>
        </li>
        <li>
          <a href="/events" onClick={(e) => handleClick('events', e)}>
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
}


export default MenuNav;
