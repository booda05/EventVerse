'use client'
import React, { useState } from 'react';
import styles from './Event.module.css';
import Form from './Form';
import Image from 'next/image';
import Head from 'next/head';


const EventsList = ({ events }) => {
  // État pour suivre l'événement sélectionné pour l'inscription
  const [selectedEvent, setSelectedEvent] = useState(null);
  const pageTitle = selectedEvent ? `Inscription à l'événement ${events.find(e => e.id === selectedEvent)?.title}` : "Liste des événements";

   // Fonction pour gérer le clic sur le bouton d'inscription
   const handleRegisterClick = (eventId) => {
    setSelectedEvent(eventId);
  };

  return (
    <div className={styles.pageContainer}>
       <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Découvrez et inscrivez-vous à nos événements exceptionnels." />
      </Head>
      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          <h2 className={styles.eventTitle}>{event.title}</h2>
          <p className={styles.eventDate}>Date: {event.date}</p>
          <p className={styles.eventDescription}>{event.description}</p>
          <Image src={event.imageUrl} alt={event.title} width={500} height={300} className={styles.eventImage} />
          <div className={styles.registerButtonContainer}>
          
            <button
              type="button"
              className={styles.registerButton}
              onClick={() => handleRegisterClick(event.id)}
            
            >
               S&apos;inscrire
            </button>
            
          </div>
          {selectedEvent === event.id && (
            <Form eventId={event.id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default EventsList;