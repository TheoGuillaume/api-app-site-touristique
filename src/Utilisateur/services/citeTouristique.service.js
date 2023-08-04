const connectToDB = require('../../../database/connexion');
const CiteTouristique = require('../Models/citeTouristqie.model');

class ServiceCiteTouristique {
    constructor() {
        // Call the connectToDB function in the constructor to establish the database connection
        this.db = connectToDB();
    }

     create = async(data) => {
        try {
            const db = await this.db;
            if (!data.title) throw new Error("Titre Obligatoire.");
            if (!data.description) throw new Error("DEscription Obligatoire.");
            const citeTouristqie = new CiteTouristique();
            citeTouristqie.title = data.title;
            citeTouristqie.description = data.description;
            citeTouristqie.localisation = data.localisation;
            citeTouristqie.photo = data.photo;
            return await citeTouristqie.save();        
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    getAll = async() => {
        try {
            const citeTouristqie = await CiteTouristique.find();
            return citeTouristqie;
        } catch (error) {
            console.log(error);
            throw error;
        }       
    }
}

module.exports = ServiceCiteTouristique;