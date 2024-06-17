import express from "express";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello, Node!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
