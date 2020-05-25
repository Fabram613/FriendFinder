// ==== CONSOLE.LOG TESTING ====
console.log("\nThe apiRoutes.js file is working!!!");

var friendData = require("../data/friends.js");
require("path");
//========
// ROUTING
//========
module.exports = function (app) {
  // API GET Request. This code handles when users "visit" a page.
  // When a user visits the link localhost:PORT/api/friends
  // they are shown a JSON of all the possible friends.
  // ---------------------------------------------------------------------
  app.get("/api/friendList", function (req, res) {
    res.json(friendData);

    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "\nInformation from the app.get function in api.Routes.js file: " +
        res.json(friendData)
    );
  });

  // API POST Request. This code handles when a user submits the survey.
  // When a user submits form data (a JSON object) the JSON is pushed to
  // the JavaScript array. User fills out a survey, data is sent to server
  // Then the server saves the data to the friends array
  // Then it handles comparison logic to find a friend.
  // ---------------------------------------------------------------------
  app.post("/api/friendList", function (req, res) {
    var lowestDifferenceInt = 50;
    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "Variable lowestDifferenceInt in apiRoutes.js File is : " +
        lowestDifferenceInt
    );

    var chosenMatch;

    friendData.forEach(function (storedUserObject) {
      var difference = 0;
      // ==== CONSOLE.LOG TESTING ====
      console.log(
        "Variable difference1 in apiRoutes.js File is : " + difference
      );

      for (i = 0; i < storedUserObject.scores.length; i++) {
        // ==== CONSOLE.LOG TESTING ====
        console.log(
          "storedUserObject.scores.length in apiRoutes.js File is : " +
            storedUserObject.scores.length
        );

        difference += Math.abs(storedUserObject.scores[i] - req.body.scores[i]);
        // ==== CONSOLE.LOG TESTING ====
        console.log(
          "Variable difference2 in apiRoutes.js File is : " + difference
        );
      }

      if (difference < lowestDifferenceInt) {
        lowestDifferenceInt = difference;
        // ==== CONSOLE.LOG TESTING ====
        console.log(
          "Variable lowestDifferenceInt2 in apiRoutes.js File is : " +
            lowestDifferenceInt
        );

        chosenMatch = storedUserObject;
        // ==== CONSOLE.LOG TESTING ====
        console.log(
          "Variable chosenMatch 2 in apiRoutes.js File is : " +
            JSON.stringify(chosenMatch)
        );
      }
    }); //End of friendData.forEach

    friendData.push(req.body);
    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "Variable friendData in apiRoutes.js File is : " +
        JSON.stringify(friendData)
    );

    res.json(chosenMatch);
    // ==== CONSOLE.LOG TESTING ====
    console.log(
      "\nHERE IS THE BEST FAMOUS FRIEND MATCH Variable chosenMatch 3 in apiRoutes.js File is : " +
        JSON.stringify(chosenMatch) +
        "\n"
    );
  });
}; //End of module.exports = function (app)
