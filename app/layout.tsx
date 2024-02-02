'use client'
import React, { useState } from 'react';
import Header from '@/components/header';
import Home from '@/components/home';

import styles from './layout.module.css';

const Layout: React.FC = () => {
  const [page, setPage] = useState('home'); // Gère la page actuelle

  let content;
  switch (page) {
    case 'home':
      content = <Home />;
      break;
    // Ajoutez d'autres cas pour d'autres pages
    default:
      content = <Home />;
  }

  return (
    <div>
      <Header setPage={setPage} />
      {content}
    </div>
  );
}

export default Layout;
