const express = require('express');
const router = express.Router();

const projectRoutes = require("./projectRoute");

router.use(projectRoutes);

module.exports = router;