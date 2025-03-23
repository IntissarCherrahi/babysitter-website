const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/create', async (req, res) => {
    try {
        const { parentId, babysitterId, date, time } = req.body;
        const newBooking = new Booking({ parentId, babysitterId, date, time });
        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
