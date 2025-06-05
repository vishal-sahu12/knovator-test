const express = require("express");
const app = express();
const port = 5000;

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js Backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
