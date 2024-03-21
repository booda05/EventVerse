'use client';

import { useRouter } from "next/navigation";
import React from 'react';
import styles from './Accueil.module.css';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'; 

export default function Accueil() {
  const router = useRouter();


  return (
    <div className={styles.container}>
      <Head>
        <title>Bienvenue sur Notre Site Événementiel</title>
        <meta name="description" content="Bienvenue sur Notre Site Événementiel, découvrez les prochains événements." />
      </Head>

      {/* Événement 1 */}
      <Link href="/Page1">
        
          <Image src="/date.jpg" alt="Événement 1" width={750} height={562} className={styles.eventImage} />
          <h2>Soirée Speed Dating</h2>
      </Link>

      {/* Événement 2 */}
      <Link href="/Page2">
      
          <Image src="/standup.jpg" alt="Événement 2" width={900} height={900} className={styles.eventImage}/>
          <h2>Soirée StandUP</h2>
      
      </Link>

      {/* Section À propos / Introduction */}
      <section>
          <h2 className={styles.sectionTitle}>À propos de Nous</h2>
          <p className={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
          </p>
      </section>

      {/* Section Témoignages */}
      <section>
        <h2 className={styles.sectionTitle}>Témoignages</h2>
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>{"Un témoignage de participant"}</p>
          <p>- Nom du Participant</p>
        </div>
      </section>

      {/* Section Contact / S'inscrire */}
      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contactez-Nous</h2>
        <p className={styles.sectionText}>Vous avez des questions ou souhaitez vous inscrire à un événement ? Envoyez-nous un message !</p>
      </section>
    </div>
  );
}
