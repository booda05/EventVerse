// pages/_app.js
import React from 'react';
import RootLayout from '../app/layout'; // Ajustez le chemin selon l'organisation de votre projet

function eventVerse({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default eventVerse;
