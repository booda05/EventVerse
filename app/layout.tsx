// Layout.tsx
'use client'
import React, { useState } from 'react';
import Header from '@/components/header';
import Home from '@/components/home';
import Events from '@/components/events';

import styles from './layout.module.css';

const Layout: React.FC = () => {
  const [page, setPage] = useState('home'); // Gère la page actuelle
  console.log('Current page:', page);
  let content;
  switch (page) {
    case 'home':
      content = <Home setPage={setPage} />;
      break;
    case 'events':
      content = <Events setPage={setPage} />;
      break
    default:
      content = <Home setPage={setPage} />;
  }

  return (
    <div>
      <Header setPage={setPage} />
      {content}
    </div>
  );
}

export default Layout;