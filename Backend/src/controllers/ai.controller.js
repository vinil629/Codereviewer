const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
  try {
    const code = req.body?.code;

    if (!code) {
      return res.status(400).json({ error: "prompt is required" });
    }

    const response = await aiService(code);

    res.json({ result: response });
  } catch (err) {
    console.error("Error in getReview:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Correct export
module.exports = { getReview };
