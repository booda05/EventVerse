import React from 'react';
import EventsList from "../components/Event";

const comedieEvents = [
    {
        id: 1,
        title: "Soirée Comédie (Stand-up)",
        date: "2024-04-20",
        description: "Riez aux éclats avec nos meilleurs comédiens lors d'une soirée inoubliable.",
        imageUrl: "standup.jpg"
    }
];

const ComediePage = () => <EventsList events={comedieEvents}/>;

export default ComediePage;