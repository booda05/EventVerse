// app/Contact/page.jsx
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
    alert('Votre message a été envoyé !');
  };

  return (
    <Layout>
      <div className="contactPageContainer">
        <h1>Contactez-nous</h1>
        <FormContact
          onFormSubmit={handleSubmit}
          onNameChange={handleChange}
          onEmailChange={handleChange}
          onMessageChange={handleChange}
          formData={formData}
        />
      </div>
    </Layout>
  );
};

export default ContactPage;
