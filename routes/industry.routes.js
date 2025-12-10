const express = require('express');
const router = express.Router();
const { get_industries } = require('../controllers/industry.controllers');


router.get('/', get_industries);

module.exports = router;