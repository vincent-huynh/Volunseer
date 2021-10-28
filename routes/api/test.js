const express = require('express');
const router = express.Router();

// @route           GET /api/test
// @desc            Example test route
// @access          Public
router.get('/', (req, res) => res.send('Reached test route'));

module.exports = router;