'use client'

import React, {useState} from 'react';
import styles from './Event.module.css';
import FormControl from './Form';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const EventsList = ({ events, eventTitle }) => {
  const router = useRouter();
  const pageTitle = `Détails de l'événement: ${eventTitle}`;
  const goToEventDetails = () => {
    router.push('/'); 
  };

  return (
    <div className={styles.pageContainer}>
      <Head>
      <div onClick={goToEventDetails}>
      {/* Utilisation de la variable pageTitle ici, si nécessaire */}
      <h1>{pageTitle}</h1>
      Cliquez ici pour plus de détails sur l'événement.
    </div>
      </Head>
      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          <h2 className={styles.eventTitle}>{event.title}</h2>
          <p className={styles.eventDate}>Date: {event.date}</p>
          <p className={styles.eventDescription}>{event.description}</p>
          <Image src={event.imageUrl} alt={event.title} width={500} height={300} className={styles.eventImage} />
          <FormControl eventId={event.id} />
          <div className={styles.registerButtonContainer}>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default EventsList;
