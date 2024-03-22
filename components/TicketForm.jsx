import { useState } from 'react';
import BuyTicketButton from './BuyTicketButton';


function TicketForm() {
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [ticketCount, setTicketCount] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      alert("Les adresses e-mail ne correspondent pas.");
      return;
    }
    // Ajoutez ici votre logique d'envoi du formulaire
    alert("Formulaire soumis !");
  };

  return (
    <div>
      <BuyTicketButton onClick={() => setShowForm(true)} />
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Nom:
            <input type="text" value={nom} onChange={e => setNom(e.target.value)} required />
          </label>
          <label>
            Prénom:
            <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label>
            Confirmer l&apos;email:
            <input type="email" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} required />
          </label>
          <label>
            Nombre de tickets:
            <input type="number" value={ticketCount} onChange={e => setTicketCount(e.target.value)} min="1" required />
          </label>
          <button type="submit">Soumettre</button>
        </form>
      )}
    </div>
  );
}

export default TicketForm;
