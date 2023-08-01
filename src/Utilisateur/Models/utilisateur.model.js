const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true, maxlength: 50 },
    prenom: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, unique: true, maxlength: 50 },
    mdp: { type: String, required: true, maxlength: 50 },
  });

utilisateurSchema.pre('save', function(next) {
    var user = this;
    if(!user.isModified('mdp')) return next();

    bcrypt.hash(user.mdp, null, null, function(err, hash){
        if (err) return next(err);
        user.mdp = hash;
        next();
    });
});

utilisateurSchema.methods.comparePassword = function(mdp) {
    console.log(mdp, this.mdp);
    return bcrypt.compareSync(mdp, this.mdp);
}

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;