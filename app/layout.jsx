<<<<<<< HEAD

import React from 'react';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer'; 
import styles from './layout.module.css'; 

export default function RootLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
=======
'use client'

// Importation des composants nécessaires depuis Next.js et React
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'normalize.css/normalize.css'; // Réinitialise les styles par défaut du navigateur
import '@/styles/globals.css'; // Importe vos styles globaux

// Le composant de mise en page racine
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {/* Le contenu de la page spécifique sera rendu ici */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
>>>>>>> 08ecbe391f9cde44e88ef6e4144c1ebbdbb18d7b
