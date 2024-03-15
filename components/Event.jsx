'use client'
import React, { useState } from 'react';
import styles from './Event.module.css';
import Form from './Form';

const EventsList = ({ events }) => {
  // État pour suivre l'événement sélectionné pour l'inscription
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className={styles.pageContainer}>
      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          <h2 className={styles.eventTitle}>{event.title}</h2>
          <p className={styles.eventDate}>Date: {event.date}</p>
          <p className={styles.eventDescription}>{event.description}</p>
          <img src={event.imageUrl} alt={event.title} className={styles.eventImage} />
          <div className={styles.registerButtonContainer}>
            <button
              type="button"
              className={styles.registerButton}
              onClick={() => setSelectedEvent(event.id)}
            >
              S'inscrire
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