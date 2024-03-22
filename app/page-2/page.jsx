
import EventLayout from '../../components/EventLayout';
import BuyTicketButton from '../../components/BuyTicketButton';
import Image from 'next/image';
import Head from 'next/head';

export default function SpeedDatingEvent() {
  return (
    <>
          <title>Soirée Speed Dating</title>
          <meta name="description" content="Rejoignez-nous pour une soirée inoubliable avec les meilleurs humoristes du moment! Participez à notre soirée standup comédie le 25 Mars 2024 au Théâtre des Rires à Ottawa." />
      <EventLayout title="Soirée Speed Dating" date="30 Mars 2024" location="Café de l'Amour, Ottawa">
              <Image src="/date.webp" alt="Événement 2" width={450} height={350} />
              <p>Venez trouver l&apos;amour dans une ambiance détendue et conviviale, une soirée pleine de surprises !</p>
              <BuyTicketButton />
          </EventLayout></>
  );
}
