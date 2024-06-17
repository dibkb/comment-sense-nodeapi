import express from "express";
import { getInfo } from "./routes/getInfo.js";
const app = express();
const port = 9000;

app.get("/test", (req, res) => {
  res.send("Hello, I am testing enpoint 🤗");
});
app.get("/get-info/:ytid", getInfo);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
