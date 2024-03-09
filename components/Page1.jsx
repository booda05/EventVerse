import React from 'react';
import EventsList from "./Event";

// Exemple de données pour les événements
const speedDatingEvents = [
    {
        id: 1,
        title: "Speed Dating Gourmand",
        date: "2024-03-15",
        description: "Une soirée pour rencontrer l'âme sœur autour d'un bon repas.",
        imageUrl: "date.jpg" 
    },
];

const SpeedDatingPage = () => <EventsList events={speedDatingEvents} />;

export default SpeedDatingPage;