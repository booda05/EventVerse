import React from 'react';
import styles from './FormContact.module.css';

const FormContact = ({ handleSubmit, handleChange, formData }) => (
  <div className={styles.conteneur}>
    <h1>Contactez Nous</h1>
  <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.labelContainer}>
        Nom:
        <input
          type="text"
          name="name"
          className={styles.inputText}
          value={formData.name}
          onChange={handleChange}
          required />
      </div>
      <div className={styles.labelContainer}>
        Adresse courriel:
        <input
          type="email"
          name="email"
          className={styles.inputEmail}
          value={formData.email}
          onChange={handleChange}
          required />
      </div>
      <div className={styles.labelContainer}>
        Message:
        <textarea
          name="message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required />
      </div>
      <button type="submit" className={styles.submitButton}>Envoyer</button>
    </form>
    </div>
);

export default FormContact;
