const express = require("express");
let mongoose = require("mongoose");
const app = express();

//Routes imports
const honestRoute = require("./routes/honestRoutes");
const basicRoute = require("./routes/basicRoutes");
//template engine import
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
//encode for form route
app.use(express.urlencoded({ extended: true }));
//db connection
const dbParam = "mongodb://localhost:27017/Secretshare";
// "mongodb+srv://gentlesammy:KOKO1984billo1989@honestmen.7dcux.mongodb.net/Honestmen?retryWrites=true&w=majority";

//mongoose connection, connect after
mongoose
  .connect(dbParam, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => {
    console.log("error", err);
  });

/*
    Routes
*/
//static routes
app.use(basicRoute);
//honest related routes
app.use(honestRoute);
//404
app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
