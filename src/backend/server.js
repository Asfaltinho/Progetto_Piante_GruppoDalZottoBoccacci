import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

const TREFLE_TOKEN = "usr-pHbEB8YkhsmkSbvfI1YHrmXqoVJqSkYDV1gGE3O2asM";

app.use(cors());

app.get("/plants", async (req, res) => {
  const query = req.query.q || "";

  try {
    const url = `https://trefle.io/api/v1/plants/search?token=${TREFLE_TOKEN}&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Errore backend" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend su http://localhost:${PORT}`);
});
