const express = require("express");

const router = express.Router();

const stressTest = require("../controllers/stressController");

router.get("/", stressTest);

module.exports = router;