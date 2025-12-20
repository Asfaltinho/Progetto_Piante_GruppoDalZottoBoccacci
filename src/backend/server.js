import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

// 🔑 METTI IL TUO TOKEN QUI
const TREFLE_TOKEN = "usr-pHbEB8YkhsmkSbvfI1YHrmXqoVJqSkYDV1gGE3O2asM";

app.use(cors());

app.get("/plants", async (req, res) => {
  const query = req.query.q || "";
  const family = req.query.family || "";

  try {
    let url = `https://trefle.io/api/v1/plants/search?token=${TREFLE_TOKEN}&q=${query}`;

    if (family && family !== "") {
      url += `&filter[family]=${family}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore nel backend" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend avviato su http://localhost:${PORT}`);
});
