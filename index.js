const express = require("express");

const app = express();

app.post("/test", (req, res) => {
  console.log("body", req.body);

  res.json("OK");
});
app.get("/", (req, res) => res.send("ok"));
app.listen(4000, () => console.log("Running on 4000"));
