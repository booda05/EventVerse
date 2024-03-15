
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