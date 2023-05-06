const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const date = require(__dirname + "/date.js");
const { log } = require("console");
// const request = require()

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

let items = [];
let witems = [];
var day;

app.get("/", (req, res) => {
  console.log(req.body);
  res.render("main");
});

app.post("/", (req, res) => {
  console.log(req.body);

  let b1 = req.body.button;

  if (b1 === "home") {
    res.redirect("/home");
  } else {
    res.redirect("/work");
  }
});

app.get("/home", (req, res) => {
  let day = date.getdate();
  res.render("home", { kindOfDay: day, tasks: items, name: "Home List" });
});

app.post("/home", (req, res) => {
  let item = req.body.task;

  let b = req.body.btn;

  console.log("button " + b);

  if (b === "hom") {
    res.redirect("/");
  } else if (b === "Work") {
    witems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/home");
  }

  // res.sendFile("/");
});

app.get("/work", (req, res) => {
  let day = date.getday();

  res.render("home", { name: "Work List", tasks: witems, kindOfDay: day });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚨 Server started at http://localhost:${PORT}`)
);
