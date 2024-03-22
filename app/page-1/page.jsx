import EventLayout from '../../components/EventLayout';
import BuyTicketButton from '../../components/BuyTicketButton';
import Image from 'next/image';

export default function StandupEvent() {
  return (

    <>
    <title>soirée Standup</title>
    <meta name="description" content="Rejoignez-nous pour une soirée inoubliable avec les meilleurs humoristes du moment!" />
    <EventLayout title="Soirée Standup Comédie" date="25 Mars 2024" location="Théâtre des Rires, Ottawa">
          <Image src="/comedie.webp" alt="Événement 2" width={450} height={350} />
          <p>Rejoignez-nous pour une soirée inoubliable avec les meilleurs humoristes du moment!</p>
          <BuyTicketButton />
      </EventLayout></>
  );
}
