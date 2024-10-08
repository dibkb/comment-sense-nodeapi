import express from "express";
import cors from "cors";
import helmet from "helmet";
import ytext from "youtube-ext";
import { getInfo } from "ytscr";
const app = express();
// Middleware
app.use(cors());
app.use(helmet());
// Routes
app.get("/test", (req, res) => {
  return res.send("Hello, I am testing endpoint 🤗");
});

app.get("/get-info/:ytid", async (req, res) => {
  try {
    const { ytid } = req.params;

    if (!ytid) {
      return res.status(400).json({ message: "No YouTube ID provided" });
    }
    const info = await getInfo(ytid);
    return res.status(200).json({ info });
  } catch (error) {
    console.error("Error in /get-info endpoint:", error);
    return res.status(500).json({ error: error.message, stack: error.stack });
  }
});
app.get("/search-video/:title", async (req, res) => {
  try {
    const { title } = req.params;
    if (!title) {
      return res.status(400).json({ message: "No title found" });
    }
    const data = await ytext.search(title);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
