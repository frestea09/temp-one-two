const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "ilman" });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
module.exports = app;
