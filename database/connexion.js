require('dotenv').config();
const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/touristique';
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURL, mongoOptions);
        console.log('Connexion à MongoDB réussie !');
        return mongoose.connection.db;
    } catch (error) { // Update the variable name from 'err' to 'error'
        console.error('Erreur lors de la connexion à MongoDB:', error); // Update 'err' to 'error'
        throw error; // Update 'err' to 'error'
    }
}

module.exports = connectToDB;