// ==== CONSOLE.LOG TESTING ====
console.log("The htmlRoutes.js file is working!!!\n");

//=======
//REQUIRE
//=======
var path = require("path");

//=======
//ROUTING
//=======
module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));

    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "The app.get '/' function in the htmlRoutes.js file goes to: +\n" +
        path.join(__dirname + "/../public/home.html\n")
    );
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "The app.get '/survey' function in the htmlRoutes.js file goes to: +\n" +
        path.join(__dirname + "/../public/survey.html\n")
    );
  });
}; //End of module.exports = function (app)
