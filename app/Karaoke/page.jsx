import EventLayout from '../../components/EventLayout';
import BuyTicketButton from '../../components/BuyTicketButton';
import Image from 'next/image';

export default function KaraokeEvent() {
  return (

    <><title>Soirée Karaoke</title>
    <meta name="description" content="Rejoignez-nous pour une soirée de Karaoke inoubliable, où vous pourrez chanter vos chansons préférées et profiter d'une ambiance festive!" />
    <EventLayout title="Soirée Karaoke" date="10 AVril 2024" location="Bar des Mélodies, Québec">
          <Image src="/karaoke.png" alt="Événement Karaoke" width={450} height={350} />
          <p>Rejoignez-nous pour une soirée de Karaoke inoubliable, où vous pourrez chanter vos chansons préférées et profiter d&apos;une ambiance festive!</p>
          <BuyTicketButton />
      </EventLayout></>
  );
}
