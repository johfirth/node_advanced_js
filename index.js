const word = require ('./word.js')
const inquirer = require("inquirer");
const words = ["duck","fish","cat","dog","horse","donkey","pig","cow","goat","chicken", "lamb", "calf", "sheep"
]

inquirer.prompt([
  {
    name: "Guess",
    message: "What is your guess?"
  }
]).then(function(response){

})