const express = require('express');
const router = express.Router();

const utilisateur_route = require('./src/Utilisateur/util.route');

router.use('/fw', utilisateur_route);

module.exports = router;