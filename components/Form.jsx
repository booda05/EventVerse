<<<<<<< HEAD
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
        const [email, setEmail] = useState('');
        const [confirmEmail, setConfirmEmail] = useState('');
        const [erreurEmail, setErreurEmail] = useState('');

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
            if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
                estValide = false;
                setErreurEmail('Adresse email invalide');
            } else if (email !== confirmEmail) {
                estValide = false;
                setErreurEmail('Les adresses email ne correspondent pas');
            } else {
                setErreurEmail('');
            }
        

            if(estValide) {
                setEstSoumis(true);
            }
        }

        return <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.label}>
            Nom d'utilisateur:
                <input 
                    type="text" 
                    name="nomUtilisateur" 
                    className={styles.inputField}
                    value={nomUtilisateur}
                    onChange={handleNomUtilisateur} />
                    {erreurNomUtilisateur && 
                    <div className={styles.erreur}>
            {erreurNomUtilisateur}
        </div>
    }
    </label>
                <label className={styles.label}>
                Adresse email:
                <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            {erreurEmail && <div className={styles.erreur}>{erreurEmail}</div>}

            <label className={styles.label}>
                Confirmer votre adresse email:
                <input
                    type="email"
                    name="confirmEmail"
                    className={styles.inputField}
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />
            </label>

            <label>
                Mot de passe:
                <input 
                    className={styles.inputField}
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
                    className={styles.checkboxLabel}
                    type="checkbox" 
                    name="rappelerMoi"
                    checked={rappelerMoi}
                    onChange={handleRappelerMoi} />
            </label>

            <input className={styles.submitButton} type="submit" value="S'inscrire" />

            {estSoumis && 
                <div>
                    Le formulaire a été envoyer avec succès.
                </div>
            }
        </form>
=======
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
        const [email, setEmail] = useState('');
        const [confirmEmail, setConfirmEmail] = useState('');
        const [erreurEmail, setErreurEmail] = useState('');

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
            if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
                estValide = false;
                setErreurEmail('Adresse email invalide');
            } else if (email !== confirmEmail) {
                estValide = false;
                setErreurEmail('Les adresses email ne correspondent pas');
            } else {
                setErreurEmail('');
            }
        

            if(estValide) {
                setEstSoumis(true);
            }
        }

        return <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label className={styles.label}>
            Nom d'utilisateur:
                <input 
                    type="text" 
                    name="nomUtilisateur" 
                    className={styles.inputField}
                    value={nomUtilisateur}
                    onChange={handleNomUtilisateur} />
                    {erreurNomUtilisateur && 
                    <div className={styles.erreur}>
            {erreurNomUtilisateur}
        </div>
    }
    </label>
                <label className={styles.label}>
                Adresse email:
                <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            {erreurEmail && <div className={styles.erreur}>{erreurEmail}</div>}

            <label className={styles.label}>
                Confirmer votre adresse email:
                <input
                    type="email"
                    name="confirmEmail"
                    className={styles.inputField}
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />
            </label>

            <label>
                Mot de passe:
                <input 
                    className={styles.inputField}
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
                    className={styles.checkboxLabel}
                    type="checkbox" 
                    name="rappelerMoi"
                    checked={rappelerMoi}
                    onChange={handleRappelerMoi} />
            </label>

            <input className={styles.submitButton} type="submit" value="Connection" />

            {estSoumis && 
                <div>
                    Le formulaire a été envoyer avec succès.
                </div>
            }
        </form>
>>>>>>> 08ecbe391f9cde44e88ef6e4144c1ebbdbb18d7b
    }