const express = require("express");
const app = express();
const { readFile } = require("fs").promises;
app.get("/", async (request, response) => {
  response.send(await readFile("./index.html", "utf8"));

  response.send(html);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("app availabe on http://localhost:3000")
);
