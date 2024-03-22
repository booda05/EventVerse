'use client'

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css'
import FormControl from '@/components/FormControl';

export default function Accueil() {
    const [titre, setTitre] = useState('Bienvenue sur Notre Site Événementiel');

    return (
      <div className={styles.container}>
        
          <title>{titre}</title>
          <meta name="description" content="Bienvenue sur Notre Site Événementiel, découvrez les prochains événements à ne pas manquer et participez à des soirées inoubliables. Consultez les témoignages et contactez-nous pour plus d'informations." />
        
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
        <Link href="/page-1">
         
        <Image src="/date.jpg" alt="Événement 1" width={350} height={250} className={styles.eventImage}/>
            <div><h2>Soirée Speed Dating</h2></div>
          
        </Link>
      </div>
      
      {/* Événement 2 */}
      <div className={styles.event}>
        <Link href="/page-2">
         
          <Image src="/standup.jpg" alt="Événement 2" width={400} height={400} className={styles.eventImage}/>
            <div><h2>Soirée StandUP</h2></div>
              
        </Link>
          </div>
            {/* Événement 3*/}
   
   <div className={styles.event}>
        <Link href="/Karaoke">
         
          <Image src="/boo.jpg" alt="Événement 3" width={400} height={400} className={styles.eventImage}/>
            <div><h2>Soirée Karaoké</h2></div>
              
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
            <p className={styles.testimonialText}>{"Un témoignage de participant"}</p>
            <p>- Nom du Participant</p>
          </div>
        </section>
      </div>
    );
  }