const express = require('express');
const router = express.Router();
const UtilRoute = require('./routes/utilisateur.route');
const CiteTouristiqueRoute = require('./routes/citeTouristique.route');

router.use('/user', UtilRoute);
router.use('/cite', CiteTouristiqueRoute);

module.exports = router;