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
  const honestlist = [
    {
      fullname: "Sule dada",
      date: "17/12/1989",
      title: "He returns bag of beans",
      details:
        "This man found a bag of beans and returned it back to the market",
    },
    {
      fullname: "Papa Ope",
      date: "1/1/2020",
      title: "She found a golden ring",
      details:
        "This lady found a golden ring on the road and took it to police station",
    },

    {
      fullname: "Femi Black",
      date: "17/12/1989",
      title: "Found Lost Wallet",
      details:
        "This man found a wallet filled with money and returned it to the owner",
    },
  ];
  res.render("honestlist", { title: "Honest List", honestlist });
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
