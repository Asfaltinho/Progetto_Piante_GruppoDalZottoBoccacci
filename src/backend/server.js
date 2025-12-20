import http from "http";

const TOKEN = "usr-pHbEB8YkhsmkSbvfI1YHrmXqoVJqSkYDV1gGE3O2asM";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.startsWith("/plants")) {
    const url = new URL(req.url, "http://localhost:3000");
    const query = url.searchParams.get("q") || "";

    const apiUrl = `https://trefle.io/api/v1/plants/search?token=${TOKEN}&q=${query}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500);
      res.end("Errore API");
    }
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Backend attivo su http://localhost:3000");
});
