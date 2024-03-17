//app.js
import React from 'react';
import RootLayout from './layout/RootLayout';

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}