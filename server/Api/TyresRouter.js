const express = require('express');

const TyresControler = require('./TyresControler')

const router = express.Router();

router.get('/Tyres', TyresControler.getTyres);

module.exports = router;

