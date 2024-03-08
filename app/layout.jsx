'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accueil from '@/components/Accueil'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import { useState } from 'react'

import styles from './layout.module.css'

import { Inter } from 'next/font/google'
import 'normalize.css/normalize.css'
import '@/styles/globals.css'



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');

  return <html lang="en">
    <body className={inter.className + ' ' + styles.body}>
      <Header setPage={setPage} />
      <main className={styles.main}>
        {/*children*/}
        {page === 'accueil' ? 
          <Accueil />
        : page === 'page1' ?
          <Page1 />
        : page === 'page2' ?
          <Page2 />
        :
          <div>404 - Not Found</div>
        }
      </main>
      <Footer />
    </body>
  </html>
}
