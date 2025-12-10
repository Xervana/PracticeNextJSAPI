const express = require('express');
const router = express.Router();
const { get_industries, create_industry, update_industry } = require('../controllers/industry.controllers');


router.get('/', get_industries);
router.post('/', create_industry);
router.put('/', update_industry);
module.exports = router;