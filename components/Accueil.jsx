import React, { useState } from 'react';
import styles from './Accueil.module.css'; 

export default function Accueil() {
  const [titre, setTitre] = useState('Bienvenue sur Notre Site Événementiel');

  // utilisée pour alterner entre différents titres ou pour mettre en place un carrousel de titres.
  const changeTitre = () => {
    setTitre(titre === 'Bienvenue sur Notre Site Événementiel' ? 'Découvrez Nos Événements !' : 'Bienvenue sur Notre Site Événementiel');
  };

  return (
    <div className={styles.container}>
      {/* Section Hero/Bannière */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle} onClick={changeTitre}>{titre}</h1>
        <p className={styles.heroText}>Découvrez les événements à ne pas manquer cette Semaine !</p>
      </section>

      {/* Section À propos / Introduction */}
      <section>
        <h2 className={styles.sectionTitle}>À propos de Nous</h2>
        <p className={styles.sectionText}>Nous sommes une équipe passionnée par la création d'événements uniques et mémorables. Notre plateforme vous propose une variété d'activités pour enrichir votre vie sociale et culturelle.</p>
      </section>

      {/* Section Événements à venir */}
      <section>
        <h2 className={styles.sectionTitle}>Événements à Venir</h2>
        <div className={styles.eventsContainer}>
          {/* Événement 1 */}
          <div className={styles.event}>
            <img src="/date.jpg" alt="Soirée Speed Dating" className={styles.eventImage}/>
            <div>
              <h3>Soirée Speed Dating</h3>
              <p>Rencontrez des célibataires dans une ambiance chaleureuse et dynamique. Une soirée pleine de surprises vous attend !</p>
            </div>
          </div>
          
          {/* Événement 2 */}
          <div className={styles.event}>
            <img src="/standup.jpg" alt="Soirée StandUP" className={styles.eventImage}/>
            <div>
              <h3>Soirée StandUP</h3>
              <p>Préparez-vous à une nuit de rire avec les meilleurs humoristes de la région. Une expérience inoubliable garantie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages avec un slider */}
      <section>
        <h2 className={styles.sectionTitle}>Témoignages</h2>
        <div className={styles.testimonialsSlider}>
          {/* Vous pouvez utiliser un package React Slider comme 'react-slick' pour créer un slider de témoignages */}
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"Cet événement a été fantastique, une organisation impeccable !"</p>
            <p>- Alice Martin</p>
          </div>
          {/* ... Autres témoignages ... */}
        </div>
      </section>

      {/* Section Contact / S'inscrire */}
      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contactez-Nous</h2>
        <p className={styles.sectionText}>Vous avez des questions ou souhaitez vous inscrire à un événement ? Envoyez-nous un message !</p>
        {/* Incluez ici un formulaire de contact ou des informations de contact */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Votre nom" />
          <input type="email" placeholder="Votre email" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}
