// app/Contact/page.jsx
'use client'
import React, { useState } from 'react';
import Layout from '../layout';
import FormContact from '../../components/FormContact';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // implémentez la logique de traitement du formulaire, comme l'envoi d'un email.
    alert('Votre message a été envoyé !');
  };

  return (
   
      <div className="contactPageContainer">
        <h1>Contactez-nous</h1>
        <FormContact
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
   
  );
};

export default ContactPage;
