const express = require("express");
const { getReview } = require("../controllers/ai.controller"); // ✅ destructure

const router = express.Router();

// ✅ handler is a real function now
router.post("/get-review", getReview);

module.exports = router;
