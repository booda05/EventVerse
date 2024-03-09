import React from 'react';
import styles from './Event.module.css'; // Assurez-vous d'avoir ce fichier CSS module

const EventsList = ({ events }) => {
  // Fonction pour gérer le clic sur le bouton d'inscription
  const handleRegisterClick = (eventTitle) => {
    // Affiche une alerte ou implémente une autre logique ici
    alert(`Inscription demandée pour : ${eventTitle}`);
  };

  return (
    <div className={styles.pageContainer}>
      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          <h2 className={styles.eventTitle}>{event.title}</h2>
          <p className={styles.eventDate}>Date: {event.date}</p>
          <p className={styles.eventDescription}>{event.description}</p>
          <img src={event.imageUrl} alt={event.title} className={styles.eventImage} />
            {/* Bouton S'inscrire */}
          <div className={styles.registerButtonContainer}>
            <button
              type="button"
              className={styles.registerButton}
              onClick={() => handleRegisterClick(event.title)}
            >
              S'inscrire
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;

