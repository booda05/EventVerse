import EventsList from "./Event";

const comedieEvent = [
    {
        id: 1,
    title: "Soirée Comédie (Stand-up)",
    date: "2024-04-20",
    description: "Riez aux éclats avec nos meilleurs comédiens lors d'une soirée inoubliable.",
    imageUrl:"standup.jpg"
    }
];

const comediePage = () => <EventsList events = {comedieEvent}/>;

export default comediePage;