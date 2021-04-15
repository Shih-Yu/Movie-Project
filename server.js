// Modules
require("dotenv").config();
const express = require("express");
const app = express();
const $fetch = require("node-fetch");
const PORT = process.env.PORT || 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes

// Main Page
app.get("/", (req, res) => {
  res.render("main")
})
// Home Page
app.get("/home", (req, res) => {
// Assigning API endpoint
const endpoint = process.env.URL_LINK;
// Fetching endpoint of API from Movie DB from back end using node-fetch package
$fetch(endpoint)
// Getting response in JSON and parse to JS object 
.then(response => response.json())
// Passed the parse response (JS object) and uses it
.then( data => {
  res.render("home", { data })
})
// Catches any error and lets the developer know
.catch(error => res.send(error, "There is an Error"))
})
// Listener
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`))