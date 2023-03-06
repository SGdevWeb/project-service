const express = require('express');
const router = express.Router();

const DTO = require('../dto/dtos');
const Controller = require("../controller/controller");

router.post('/create', DTO.project.create, Controller.project.create);
router.get('/:uuid', DTO.project.get, Controller.project.get);

module.exports = router;