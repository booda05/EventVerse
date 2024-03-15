'use client'

import { useState } from 'react'

import styles from './Form.module.css'

export default function FormControl() {
    const [nomUtilisateur, setNomUtilisateur] = useState('');
    const handleNomUtilisateur = (event) => setNomUtilisateur(event.target.value);
    const [motDePasse, setMotDePasse] = useState('');
    const handleMotDePasse = (event) => setMotDePasse(event.target.value);
    const [rappelerMoi, setRappelerMoi] = useState(false);
    const handleRappelerMoi = (event) => setRappelerMoi(event.target.checked);

    const [erreurNomUtilisateur, setErreurNomUtilisateur] = useState('');
    const [erreurMotDePasse, setErreurMotDePasse] = useState('');

    const [estSoumis, setEstSoumis] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        let estValide = true;
        if(!nomUtilisateur || nomUtilisateur.length < 8) {
            estValide = false;
            setErreurNomUtilisateur('Nom utilisateur invalide');
        }
        else {
            setErreurNomUtilisateur('');
        }

        if(!motDePasse || motDePasse.length < 8) {
            estValide = false;
            setErreurMotDePasse('Mot de passe invalide');
        }
        else {
            setErreurMotDePasse('');
        }

        if(estValide) {
            setEstSoumis(true);
        }
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <label>
            Nom d'utilisateur:
            <input 
                type="text" 
                name="nomUtilisateur" 
                value={nomUtilisateur}
                onChange={handleNomUtilisateur} />
            {erreurNomUtilisateur && 
                <div className={styles.erreur}>
                    {erreurNomUtilisateur}
                </div>
            }
        </label>
        <label>
            Mot de passe:
            <input 
                type="password" 
                name="motDePasse"
                value={motDePasse}
                onChange={handleMotDePasse} />
            {erreurMotDePasse && 
                <div className={styles.erreur}>
                    {erreurMotDePasse}
                </div>
            }
        </label>
        <label>
            Se rappeler de moi
            <input 
                type="checkbox" 
                name="rappelerMoi"
                checked={rappelerMoi}
                onChange={handleRappelerMoi} />
        </label>

        <input type="submit" value="Connection" />

        {estSoumis && 
            <div>
                Le formulaire a été envoyer avec succès.
            </div>
        }
    </form>
}