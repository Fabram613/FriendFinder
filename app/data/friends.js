// =====
// DATA
// =====

// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ========================================================

var friendData = [{
    //Alias Agent Michael Scarn
    "name": "Agent Michael Scarn",
    "photo": "/assets/images/AgentMichaelScarn.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
    //Alias Anastasia Beaverhausen
    "name": "Anastasia Beaverhausen",
    "photo": "/assets/images/AnastasiaBeaverhausen.jpg",
    "scores": [1, 1, 4, 5, 5, 2, 5, 5, 5, 1]
},
{
    //Alias Art Vandelay
    "name": "Art Vandelay",
    "photo": "/assets/images/ArtVandelay.jpg",
    "scores": [3, 2, 3, 4, 4, 4, 3, 5, 1, 3]
},
{
    //Alias Burt Macklin
    "name": "Burt Macklin",
    "photo": "/assets/images/BurtMacklin.jpg",
    "scores": [2, 1, 4, 2, 5, 2, 3, 4, 1, 4]
},
{
    //Alias Clive Bixby
    "name": "Clive Bixby",
    "photo": "/assets/images/CliveBixby.jpg",
    "scores": [1, 4, 3, 2, 3, 3, 2, 5, 2, 4]
},
{
    //Alias Duke Silver
    "name": "Duke Silver",
    "photo": "/assets/images/DukeSilver.jpg",
    "scores": [1, 2, 1, 5, 3, 1, 4, 2, 3, 1]
},
{
    //Alias Janet Snakehole
    "name": "Janet Snakehole",
    "photo": "/assets/images/JanetSnakehole.jpg",
    "scores": [5, 3, 4, 3, 2, 4, 1, 5, 2, 5]
},
{
    //Alias Ken Adams
    "name": "Ken Adams",
    "photo": "/assets/images/KenAdams.jpg",
    "scores": [2, 3, 2, 1, 1, 5, 2, 2, 3, 1]
},
{
    //Alias Ms. Chanandler Bong
    "name": "Ms. Chanandler Bong",
    "photo": "/assets/images/MsChanandlerBong.png",
    "scores": [1, 5, 1, 4, 3, 4, 5, 4, 4, 2]
},
{
    //Alias Regina Phalange
    "name": "Regina Phalange",
    "photo": "/assets/images/ReginaPhalange.jpeg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}
]; //End of friends 'database' array

// Note how we export the array.
//This makes it accessible to other files using require. 
module.exports = friendData;