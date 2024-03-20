// components/FormContact.jsx
import React from 'react';
import styles from './FormContact.module.css';

const FormContact = ({ handleSubmit, handleChange, formData }) => (
  <form className={styles.formContainer} onSubmit={handleSubmit}>
    <label>
      Nom:
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Adresse courriel:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
    <label>
      Message:
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </label>
    <button type="submit">Envoyer</button>
  </form>
);

export default FormContact;
