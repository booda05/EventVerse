import React, { useState } from 'react';
import styles from './Accueil.module.css'; // Assurez-vous que le chemin d'accès est correct

export default function Accueil() {
  const [titre, setTitre] = useState('Bienvenue sur Notre Site Événementiel');

  return (
    <div className={styles.container}>
      {/* Section Hero/Bannière */}
      <section className={styles.heroSection}>
      <h1 className={styles.heroTitle} onClick={() => setTitre('Découvrez Nos Événements !')}>{titre}</h1>
        <p className={styles.heroText}>Découvrez les événements à ne pas manquer cette Semaine !</p>
      </section>

      {/* Section À propos / Introduction */}
      <section>
        <h2 className={styles.sectionTitle}>À propos de Nous</h2>
        <p className={styles.sectionText}>Apprenez-en plus sur notre mission et ce que nous proposons.</p>
      </section>

      {/* Section Événements à venir */}
      <section>
  <h2 className={styles.sectionTitle}>Événements à Venir</h2>
  <div className={styles.eventsContainer}>
    {/* Événement 1 */}
    <div className={styles.event}>
      <img src="/date.jpg" alt="Événement 1" className={styles.eventImage}/>
      <div><h2>Soirée Speed Dating</h2></div>
    </div>
    
    {/* Événement 2 */}
    <div className={styles.event}>
      <img src="/standup.jpg" alt="Événement 2" className={styles.eventImage}/>
      <div><h2>Soirée StandUP</h2></div>
    </div>
  </div>
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
