// Importe les hooks et styles nécessaires
import { useState } from 'react';
import styles from './Form.module.css';

// Définition du composant de formulaire
export default function Form() {
    // État pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        nomUtilisateur: '',
        motDePasse: '',
        rappelerMoi: false,
        email: '',
        confirmEmail: '',
    });

    // État pour stocker les messages d'erreur des champs du formulaire
    const [errors] = useState({
        erreurNomUtilisateur: '',
        erreurMotDePasse: '',
        erreurEmail: '',
    });

    // État pour suivre si le formulaire a été soumis avec succès
    const [estSoumis, setEstSoumis] = useState(false);

    // Gère les changements dans les champs du formulaire et met à jour l'état correspondant
    const handleInputChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

   
    // Gère la soumission du formulaire
    const handleSubmit = (event) => {
        // Logique de soumission ici (identique à votre implémentation)
    };

    // Rendu du composant de formulaire
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            {/* Champ Nom d'utilisateur */}
            <label className={styles.label}>
                Nom d&apos;utilisateur
                <input
                    type="text"
                    name="nomUtilisateur"
                    value={formData.nomUtilisateur}
                    onChange={handleInputChange}
                    className={styles.inputField} />
                {errors.erreurNomUtilisateur && <div className={styles.erreur}>{errors.erreurNomUtilisateur}</div>}
            </label>
            
            {/* Champ Mot de passe */}
            <label className={styles.label}>
                Mot de passe
                <input
                    type="password"
                    name="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleInputChange}
                    className={styles.inputField} />
                {errors.erreurMotDePasse && <div className={styles.erreur}>{errors.erreurMotDePasse}</div>}
            </label>
            
            {/* Champ Email */}
            <label className={styles.label}>
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.inputField} />
                {errors.erreurEmail && <div className={styles.erreur}>{errors.erreurEmail}</div>}
            </label>
            
            {/* Champ Confirmer Email */}
            <label className={styles.label}>
                Confirmer l&apos;Email
                <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleInputChange}
                    className={styles.inputField} />
                {/* Pas d'erreur spécifique pour confirmEmail, utilise erreurEmail */}
            </label>
            
            {/* Checkbox Se rappeler de moi */}
            <label className={styles.label}>
                Se rappeler de moi
                <input
                    type="checkbox"
                    name="rappelerMoi"
                    checked={formData.rappelerMoi}
                    onChange={handleInputChange}
                    className={styles.checkbox} />
            </label>

            {/* Bouton de soumission */}
            <input className={styles.submitButton} type="submit" value="S'inscrire" />
            
            {/* Message de succès */}
            {estSoumis && <div>Le formulaire a été envoyé avec succès.</div>}
        </form>
    );
}
