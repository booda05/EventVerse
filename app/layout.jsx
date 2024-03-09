'use client'

// Importation des composants nécessaires depuis Next.js et React
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'normalize.css/normalize.css'; // Réinitialise les styles par défaut du navigateur
import '@/styles/globals.css'; // Importe vos styles globaux
import styles from './layout.module.css';



// Le composant de mise en page racine
export default function RootLayout({ children }) {
  return <html lang="en">
  <body className={styles.body}>
      <Header />
      <main className={styles.main}>
          {children}
      </main>
      <Footer />
  </body>
</html>
}
