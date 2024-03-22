// components/BuyTicketButton.jsx
'use client'
import styles from './BuyTicketButton.module.css';

function BuyTicketButton() {
    return (
      <button className={styles.button} onClick={() => alert("Merci pour votre intérêt ! Les informations de paiement seront disponibles bientôt.")}>
        Réserver !
      </button>
    );
  }
  
  export default BuyTicketButton;
  