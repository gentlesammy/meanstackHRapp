const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});

app.listen(5000);
