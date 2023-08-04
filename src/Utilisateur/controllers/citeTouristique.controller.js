const ServiceCiteTouristique = require('../services/citeTouristique.service');

class CtrlCiteTouristique {

    constructor(){
        this.serviceCiteTouristique = new ServiceCiteTouristique();
    }

    createCiteTouristique = async(req, res) =>{
        try {
            req.body.photo = req.file ? req.file.filename : null;
            const newCiteTouristique = await this.serviceCiteTouristique.create(req.body);
            return res.status(200).send({statue : "ok", message : "Cite créer avec succès", data : newCiteTouristique});
        } catch (error) {
            return res.status(500).send({statue : "ko", message : error.message})
        }
    }

    getAllCiteTouristique = async(req, res) => {
        try {
            const liste = await this.serviceCiteTouristique.getAll();
            return res.status(200).send({statue : "ok", message : "Liste", data : liste});
        } catch (error) {
            return res.status(500).send({statue : "ko", message : error.message})
        }
    }

}

module.exports = CtrlCiteTouristique;