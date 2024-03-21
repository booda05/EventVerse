// Importe les hooks et styles nécessaires
import { useState } from 'react';
import styles from './Form.module.css';

// Définition du composant de formulaire
export default function Forml() {
    // État pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        nomUtilisateur: '',
        motDePasse: '',
        rappelerMoi: false,
        email: '',
        confirmEmail: '',
    });

    // État pour stocker les messages d'erreur des champs du formulaire
    const [errors, setErrors] = useState({
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

    // Valide les données du formulaire et met à jour l'état des erreurs si nécessaire
    const validateForm = () => {
        let newErrors = { ...errors };
        let isValid = true;

        // Validation du nom d'utilisateur
        if (!formData.nomUtilisateur || formData.nomUtilisateur.length < 8) {
            isValid = false;
            newErrors.erreurNomUtilisateur = 'Nom utilisateur invalide';
        } else {
            newErrors.erreurNomUtilisateur = '';
        }

        // Validation du mot de passe
        if (!formData.motDePasse || formData.motDePasse.length < 8) {
            isValid = false;
            newErrors.erreurMotDePasse = 'Mot de passe invalide';
        } else {
            newErrors.erreurMotDePasse = '';
        }

        // Validation de l'email
        if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            isValid = false;
            newErrors.erreurEmail = 'Adresse email invalide';
        } else if (formData.email !== formData.confirmEmail) {
            isValid = false;
            newErrors.erreurEmail = 'Les adresses email ne correspondent pas';
        } else {
            newErrors.erreurEmail = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    // Gère la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le comportement par défaut de rechargement de la page

        if (validateForm()) { // Si le formulaire est valide
            setEstSoumis(true); // Indique que le formulaire a été soumis avec succès
            // Ici, on peut ajouter la logique pour traiter les données du formulaire (e.g., envoi à un serveur)
        }
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
                    className={styles.inputField}
                    value={formData.nomUtilisateur}
                    onChange={handleInputChange} />
                {errors.erreurNomUtilisateur &&
                    <div className={styles.erreur}>
                        {errors.erreurNomUtilisateur}
                    </div>
                }
            </label>
            <input className={styles.submitButton} type="submit" value="S'inscrire" />
            {estSoumis &&
                <div>
                    Le formulaire a été envoyé avec succès.
                </div>
            }
        </form>
    );
}
