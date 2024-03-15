'use client';

import React, { useState } from 'react';
import styles from '/components/Accueil.module.css'; // Assurez-vous que le chemin d'accès est correct
import Link from 'next/link';

export default function Accueil() {
  const [titre, setTitre] = useState('Bienvenue sur Notre Site Événementiel');

  return (
    <div className={styles.container}>
      {/* Section Hero/Bannière */}
      <section className={styles.heroSection}>
      <h1 className={styles.heroTitle} onClick={() => setTitre('Découvrez Nos Événements !')}>{titre}</h1>
        <p className={styles.heroText}>Découvrez les événements à ne pas manquer cette Semaine !</p>
      </section>
      {/* Section Événements à venir */}
      <section>
  <h2 className={styles.sectionTitle}>Événements</h2>
  <div className={styles.eventsContainer}>
    {/* Événement 1 */}
    <div className={styles.event}>
      <Link href="/Page1">
        
          <img src="/date.jpg" alt="Événement 1" className={styles.eventImage}/>
          <div><h2>Soirée Speed Dating</h2></div>
        
      </Link>
    </div>
    
    {/* Événement 2 */}
    <div className={styles.event}>
      <Link href="/Page2">
        
          <img src="/standup.jpg" alt="Événement 2" className={styles.eventImage}/>
          <div><h2>Soirée StandUP</h2></div>
       
      </Link>
    </div>
  </div>
</section>

{/* Section À propos / Introduction */}
<section>
        <h2 className={styles.sectionTitle}>À propos de Nous</h2>
        
        <p className={styles.sectionText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nunc orci. Ut venenatis justo ac sapien elementum aliquet. Suspendisse scelerisque feugiat magna et placerat. Nullam finibus enim vel sem mollis ullamcorper. Donec orci sapien, lobortis ut nulla id, aliquet imperdiet urna. In ac rutrum quam. Proin dictum ornare est non tincidunt. Morbi sed nulla quis lectus commodo ornare. Nunc porttitor metus rhoncus, laoreet nunc ut, semper nibh.

Aliquam erat volutpat. Aenean tempor, ligula ut posuere tempus, magna arcu pretium lacus, non auctor nunc turpis ac lectus. Praesent pharetra accumsan ornare. Aenean varius in massa non hendrerit. Suspendisse potenti. Mauris tempus finibus urna id viverra. Vestibulum tempus sed tortor ullamcorper aliquet. Nullam in hendrerit ex. Maecenas a suscipit metus, tempus ullamcorper ligula. Nam ut scelerisque ante, finibus tempus dolor. Curabitur dignissim ipsum quis arcu porta, sed viverra dui condimentum. Sed maximus nibh tellus, a tempor est feugiat sit amet. Vivamus sed vehicula odio. </p>
      </section>

      {/* Section Témoignages */}
      <section>
        <h2 className={styles.sectionTitle}>Témoignages</h2>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>"Un témoignage de participant"</p>
          <p>- Nom du Participant</p>
        </div>
      </section>

      {/* Section Contact / S'inscrire */}
      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contactez-Nous</h2>
        <p className={styles.sectionText}>Vous avez des questions ou souhaitez vous inscrire à un événement ? Envoyez-nous un message !</p>
        {/* Incluez ici un formulaire de contact ou des informations de contact */}
      </section>
    </div>
  );
}
