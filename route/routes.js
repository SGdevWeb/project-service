const express = require('express');
const router = express.Router();

const projectRoutes = require("./projectRoutes");
const typeRoutes = require("./typeRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/project", projectRoutes);
router.use("/type", typeRoutes);
router.use("/comments", commentRoutes)

module.exports = router;