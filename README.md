# FriendFinder

Compatibility-based "FriendFinder" Application

Trilogy Education Services Full-Stack Web Developer Program

Week 13 Homework Assignment: Node and Express Servers

## Live App

* Check out [the live version of the site here](https://friend-finder-mw.herokuapp.com/). 

### Overview

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

### Instructions

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express`, `body-parser` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default USE route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. Data is saved in the app as an array of objects. Each of these objects follows the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. The app determines the user's most compatible friend using the following:

   * Converts each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * Then it compares the difference between current user's scores against those from other users, question by question. Adds up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Using the absolute value of the differences. Put another way: no negative solutions! App calculates both `5-3` and `3-5` as `2`, and so on. 
   * The closest is the user with the least amount of difference.

7. Once the current user's most compatible friend is found, it displays the result as a modal pop-up.
   * The modal displays both the name and picture of the closest match. 

- - -

## Copyright

Fabian Ramirez (C) 2020. All Rights Reserved.