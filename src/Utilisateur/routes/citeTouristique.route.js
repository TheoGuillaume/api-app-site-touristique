const express = require('express');
const router = express.Router();
const upload = require('../../middleware/upload');
const CtrlCiteTouristique = require('../controllers/citeTouristique.controller');
const citeTouristiqueController = new CtrlCiteTouristique();


router.post('/',upload(['.png', '.jpg'],'image','photo'), citeTouristiqueController.createCiteTouristique);
router.get('/', citeTouristiqueController.getAllCiteTouristique);

module.exports = router;