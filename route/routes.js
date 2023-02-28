const express = require('express');
const router = express.Router();

const projectRoutes = require("./projectRoutes");
const typeRoutes = require("./typeRoutes");

router.use("/project", projectRoutes);
router.use("/type", typeRoutes);

module.exports = router;