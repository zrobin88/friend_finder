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

    //console.log(userData);

    friendsList.push(userData);

    // console.log(res.json(userData));
        //get the score of each friend 
for (let i = 0; i < friends.length; i++) {

    var friendScores = friends[i].scores;
   //console.log(friendScores);
  console.log(sum(friendScores));
  
  
  }; 

});

}







  
  
  
  
  function sum(input){
               
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
  