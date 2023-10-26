const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json([
    { nome: "luca", cognome: "rossi" },
    { nome: "anna", cognome: "rossi" },
  ]);
});
app.listen(3000);
