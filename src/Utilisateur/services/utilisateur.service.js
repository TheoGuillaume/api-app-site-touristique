const connectToDB = require('../../../database/connexion');
const Utilisateur = require('../Models/utilisateur.model');
const bcrypt = require('bcrypt-nodejs');

class UtilisateurService {
    constructor() {
        // Call the connectToDB function in the constructor to establish the database connection
        this.db = connectToDB();
    }

    async create(data) {
        try {
            const db = await this.db;
            if (!data.nom) throw new Error("Le champ 'nom' est obligatoire.");
            if (!data.prenom) throw new Error("Le champ 'prenom' est obligatoire.");
            if (!data.email) throw new Error("Le champ 'email' est obligatoire.");
            if (!data.mdp) throw new Error("Le champ 'mdp' est obligatoire.");
            const existingUser = await Utilisateur.findOne({ email: data.email });
            if (existingUser) {
                throw new Error("Cet email est déjà pris.");
            }
            const utilisateur = new Utilisateur();
            utilisateur.nom = data.nom;
            utilisateur.prenom = data.prenom;
            utilisateur.mdp = data.mdp;
            utilisateur.email = data.email;
            const newUtilisateur = await utilisateur.save();
            return newUtilisateur;
        } catch (error) {
            throw error;
        }
    }

    async login(data) {
        try {
            const db = await this.db;
            if (!data.email) throw new Error("Le champ 'email' est obligatoire.");
            if (!data.mdp) throw new Error("Le champ 'mdp' est obligatoire.");
            const existingUser = await Utilisateur.findOne({ email: data.email });
            if(!existingUser) throw new Error("Utilisateur introuvable.");
            const validMdp = bcrypt.compareSync(data.mdp, existingUser.mdp);
            if(!validMdp) throw new Error("Mot de passe incorrect.");
            return existingUser;
        } catch (error) {
            throw error;
        }
    } 
}

module.exports = UtilisateurService;