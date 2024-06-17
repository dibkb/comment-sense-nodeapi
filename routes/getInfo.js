import ytext from "youtube-ext";
export const getInfo = async (req, res) => {
  try {
    const { ytid } = req.params;
    if (!ytid) return res.status(400).json({ message: "No youtube id found" });
    const data = await ytext.videoInfo(ytid);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(typedError.message);
  }
};
