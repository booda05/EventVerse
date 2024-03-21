import React from 'react';
import EventsList from "../../components/Event";

export default function Page1() {
   
    const speedDatingEvents = [
        {
            id: 1,
            title: "Speed Dating Gourmand",
            date: "2024-03-15",
            description: "Une soirée pour rencontrer l'âme sœur autour d'un bon repas.",
            imageUrl: "/date.jpg" 
        },
    ];

    return <EventsList events={speedDatingEvents} />;
}
