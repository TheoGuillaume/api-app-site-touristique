const UtilisateurService = require('../services/utilisateur.service');
const {generateAccessToken} = require('../../middleware/authenticate');
class ControllerUtilisateur {
    constructor() {
        //super();
        this.serciceUtilisateur = new UtilisateurService();
    }

    createUtilisateur = async (req, res) => {
        try {
            const newUser = await this.serciceUtilisateur.create(req.body);
            return res.status(200).send({statue : "ok", message : "Compte créer avec succès", data : newUser});
        } catch (error) {
            //console.log(error);
            return res.status(500).send({statue : "ko", message : error.message})
        }
    }

    loginUtilisateur = async (req, res) => {
        try {
            const utilisateur = await this.serciceUtilisateur.login(req.body);
            const MODEL_USER = {
                id : utilisateur.id,
                email : utilisateur.email
            }

            const acces_token = generateAccessToken(MODEL_USER);
            return res.status(200).send({statue : "ok", message : "Compte créer avec succès", acces_token,data : utilisateur});

        } catch (error) {
             console.log(error);
             return res.status(500).send({statue : "ko", message : error.message})
        }
    }
}

module.exports = ControllerUtilisateur