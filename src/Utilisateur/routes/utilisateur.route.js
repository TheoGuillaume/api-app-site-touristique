const express = require('express');
const router = express.Router();
const ControllerUtilisateur = require('../controllers/utilisateur.controller');

const userController = new ControllerUtilisateur();

router.post('/', userController.createUtilisateur);
router.post('/login', userController.loginUtilisateur);

module.exports = router;