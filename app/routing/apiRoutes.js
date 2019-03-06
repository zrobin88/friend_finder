let friendsList = require("../data/friends.js");
const express = require("express");

const app = express();
const PORT = 3000;

module.exports = function (app){

app.get("/api/friends", function (req, res) {

    res.json(friendslist);
});
console.log(friendsList)
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let userData = req.body;

    userData.routeName = userData.name.replace(/\s+/g, "").toLowerCase();

    console.log(req.body.scores);

    friendsList.push(userData);

    res.json(userData);
        //get the score of each friend 
/*for (let i = 0; i < friends.length; i++) {

    var friendScores = friends[i].scores;
   //console.log(friendScores);
  console.log(sum(friendScores));*/
});




  $.get("/api/friends/", function (data) {
    let minArr = [];
    for (let i = 0; i < data.length; i++) {
        let currentScore = 0;
        for (let l = 0; l < data[i].scores.length; l++) {
            let c = userData.scores[l] - data[i].scores[l];
            currentScore += parseFloat(c);
        }
        data[i].friendScore = Math.abs(currentScore);
        minArr.push(parseFloat(data[i].friendScore));
    }
    for (let v = -1; v < 10; v++) {
        let index;
        if (minArr.includes(v)) {
            index = minArr.indexOf(v);
            $('#name-title').text(data[index].name + '');
            $('#profile-image').attr('src', data[index].photo);
            console.log(data[index]);
            break;
        }
    }
});

  
};







  
  
  
  
  