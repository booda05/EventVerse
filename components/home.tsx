const Home: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  return (
    <div>
      <h2>Show Events</h2>
      <p>Ceci est la page d'accueil. N'hésitez pas à explorer notre site pour en savoir plus sur ce que nous proposons.</p>
      <button onClick={() => setPage('events')}>Aller à la page des événements</button>
    </div>
  );
}

export default Home;