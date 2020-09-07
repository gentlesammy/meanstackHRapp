const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("index", { title: "Welcome" });
});

router.get("/about", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("about", { title: "About Us" });
});

router.get("/create", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("create", { title: "submit report" });
});

router.get("/terms", function (req, res) {
  // res.send("<h1>HomePage</h1>");
  res.render("terms", { title: "terms and condition" });
});

module.exports = router;
