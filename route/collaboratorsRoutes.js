const express = require('express');
const router = express.Router();

const DTO = require('../dto/dtos');
const Controller = require("../controller/controller");

router.post('/add', DTO.collaborators.create, Controller.collaborators.create);

module.exports = router;