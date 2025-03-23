const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const babysitters = await User.find({ role: 'babysitter' });
        res.json(babysitters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
