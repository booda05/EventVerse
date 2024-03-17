// components/FormContact.jsx
import React from 'react';
import styles from './FormContact.module.css';

const FormContact = ({handleSubmit, onNameChange, onEmailChange, onMessageChange, formData }) => (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
    <label>
      Nom:
      <input type="text" name="name" value={formData.name} onChange={onNameChange} required />
    </label>
    <br />
    <label>
      Adresse courriel:
      <input type="email" name="email" value={formData.email} onChange={onEmailChange} required />
    </label>
    <br />
    <label>
      Message:
      <textarea name="message" value={formData.message} onChange={onMessageChange} required />
    </label>
    <br />
    <button type="submit">Envoyer</button>
  </form>
);

export default FormContact;
