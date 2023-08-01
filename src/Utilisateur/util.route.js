const express = require('express');
const router = express.Router();
const UtilRoute = require('./routes/utilisateur.route');

router.use('/utilisateur', UtilRoute);

module.exports = router;