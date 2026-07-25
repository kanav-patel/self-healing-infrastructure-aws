const express = require("express");

const router = express.Router();

const crashApplication = require("../controllers/crashController");

router.get("/", crashApplication);

module.exports = router;