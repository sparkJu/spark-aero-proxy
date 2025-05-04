
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // Allow calls from FlutterFlow

app.get("/aviation-news", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "aviation",
        language: "fr",
        sortBy: "publishedAt"
      },
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running on port 3000")
);
