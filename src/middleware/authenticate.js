const jwt = require('jsonwebtoken');

exports.authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.status(401).json({ message : "Veuillez regénérer un autre token"});
    };

    jwt.verify(token, process.env.SECRET_TOKEN, (err, utilisateur) => {
        console.log(err);
        if(err){
            return res.status(403).json({ message : "Impossible de se connecter"});
        }
        req.utilisateur = utilisateur;
        console.log("user online : ", req.utilisateur)
        next();
    })
};

exports.generateAccessToken = (utilisateur) => {
    return jwt.sign(utilisateur, process.env.SECRET_TOKEN, {expiresIn: '1d'});
}
