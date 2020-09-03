const express = require("express");
const app = express();
app.set("view engine", "ejs");

//routes
app.get("/", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("index", { title: "Welcome" });
});

app.get("/about", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("about", { title: "About Us" });
});

app.get("/create", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("create", { title: "submit report" });
});

app.get("/honestlist", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("honestlist", { title: "Honest List" });
});

// app.get("/about", function (req, res) {
//   // res.send("<h1>HomePage</h1>");
//   res.render("about", { title: "About Us" });
// });

app.get("/terms", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("terms", { title: "terms and condition" });
});

//404
app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

app.listen(5000);
