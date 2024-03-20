const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "ilman" });
});
// app.get("/template", (req, res) => {
//   res.render("index", {});
// });

// app.post("/", (req, res) => {
//   let numberone = req.body.inputOne;
//   res.send({ numberone });
// });
// app.get("/about-us", (req, res) => {
//   res.send("hello about us");
// });
app.listen(3000, () => {
  console.log(`running on port ${port}`);
});
module.exports = app;
