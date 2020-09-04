const express = require("express");
let mongoose = require("mongoose");
let morgan = require("morgan");
const HonestList = require("./models/honestlist");
const app = express();

app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));

const dbParam =
  "mongodb+srv://gentlesammy:KOKO1984billo1989@honestmen.7dcux.mongodb.net/Honestmen?retryWrites=true&w=majority";

mongoose
  .connect(dbParam, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => {
    console.log("error", err);
  });
//routes
app.get("/", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("index", { title: "Welcome" });
});

//mongoose and mongodb sandbox routes
app.get("/add-honest", (req, res) => {
  const honestList = new HonestList({
    fullName: "Samuel Odunlade",
    date: new Date(),
    title: "Returned an extra Plate of Jollof Rice",
    details:
      "The gentleman attended a party, he received food and ate it,  went out to ease himself, when he came back he saw another fried rice serve already, guess what? he returned it",
  });

  honestList
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-list", (req, res) => {
  HonestList.find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/list-detail", (req, res) => {
  HonestList.findById("5f51d4007aad9b30787d603b")
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
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
