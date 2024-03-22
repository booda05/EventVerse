'use client'

import { useState } from 'react'
import styles from './FormControl.module.css'

export default function FormControl() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [estSoumis, setEstSoumis] = useState(false);
    const [erreurs, setErreurs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        // Log des valeurs dans la console
        console.log('Nom:', nom);
        console.log('Email:', email);
        console.log('Message', message);

        // Réinitialiser les champs du formulaire
        setNom('');
        setPrenom('');
        setEmail('');
        setMessage('');

        const nouvellesErreurs = {};

        // Vérification que le nom n'est pas vide
        if (!nom.trim()) nouvellesErreurs.nom = 'Le nom est requis';
        // Vérification que le prénom n'est pas vide
        if (!prenom.trim()) nouvellesErreurs.prenom = 'Le prénom est requis';
        // Vérification que l'email n'est pas vide et est valide
        if (!email.trim()) {
            nouvellesErreurs.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            nouvellesErreurs.email = 'L\'email est invalide';
        }

        setErreurs(nouvellesErreurs);

        // Si l'objet d'erreurs est vide, le formulaire est considéré comme valide
        if (Object.keys(nouvellesErreurs).length === 0) {
            setEstSoumis(true);
            console.log({ nom, prenom, email, message });
            // Ajoutez ici votre logique pour traiter les données du formulaire
        }
    }

    return (
        
        <><h1 className={styles.pageTitle}>Contactez Nous</h1><form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Nom:
                <input
                    type="text"
                    name="nom"
                    className={styles.input}
                    value={nom}
                    onChange={e => setNom(e.target.value)} />
                {erreurs.nom && <div className={styles.erreur}>{erreurs.nom}</div>}
            </label>
            <label>
                Prénom:
                <input
                    type="text"
                    name="prenom"
                    className={styles.input}
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)} />
                {erreurs.prenom && <div className={styles.erreur}>{erreurs.prenom}</div>}
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                {erreurs.email && <div className={styles.erreur}>{erreurs.email}</div>}
            </label>
            <label>
                Message:
                <textarea
                    name="message"
                    className={styles.input}
                    value={message}
                    onChange={e => setMessage(e.target.value)} />
            </label>

            <input type="submit" value="Envoyer" className={styles.submitButton} />

            {Object.keys(erreurs).length === 0 && estSoumis &&
                <div>
                    Le formulaire a été envoyé avec succès.
                </div>}
        </form></>
        
    );
}
