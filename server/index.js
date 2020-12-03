const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8900;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

app.listen(PORT, () => console.log("okay"));
