import React from 'react';

const Events: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const handleClick = () => {
    setPage('home');
  };

  return (
    <div>
      <h2>Événements à venir</h2>
      <p>Découvrez nos prochains événements ci-dessous !</p>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  );
}

export default Events;