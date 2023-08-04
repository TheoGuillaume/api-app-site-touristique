const mongoose = require('mongoose');

const citeTouristiqueSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength:  100},
    description: { type: String, maxlength: 300 },
    localisation : { type: String, maxlength: 50 },
    photo : { type : String, maxlength: 80 }
});

const CiteTouristique = mongoose.model('CiteTouristique', citeTouristiqueSchema);
module.exports = CiteTouristique;