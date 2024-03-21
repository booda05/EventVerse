import React from 'react';
import EventsList from "../../components/Event";

export default function ComediePage() {
    // Intégrer directement les données dans le composant
    const comedieEvents = [
        {
            id: 1,
            title: "Soirée Comédie (Stand-up)",
            date: "2024-04-20",
            description: "Riez aux éclats avec nos meilleurs comédiens lors d'une soirée inoubliable.",
            imageUrl: "/standup.jpg"
        }
    ];

    return <EventsList events={comedieEvents} />;
}
