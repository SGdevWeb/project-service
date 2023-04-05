const express = require('express');
const router = express.Router();
const Services = require('../service/services');

router.get('/', async (req, res) => {
    try {
        const types = await Services.type.getAll();
        res.status(200).json(types);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

module.exports = router;