//=======
//REQUIRE
//=======
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//======================
//EXPRESS CONFIGURATION
//======================

//This tells node that we are creating an "express" server.
var app = express();

//This sets the initial port which we will use in the listener later.
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Uses any static files required by the html files.
app.use(express.static('app/public/'));

// This points our server to the route files, which give the server a "map" of
// how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//=========
//LISTENER
//=========

// This code effectively "starts" our server.
app.listen(PORT, function() {
    console.log("From server.js File: App listening on PORT: " + PORT + "\n");
});