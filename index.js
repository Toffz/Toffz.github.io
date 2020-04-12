//**************** DOM SELECTORS *****************//
var rulesButton = document.getElementById("rules-open");
var rulesPanel = document.getElementById("rules-panel");
var rulesClose = document.getElementById("close-panel");
var dim = document.getElementById("dim");
var weapons = document.getElementsByClassName("weapon");
var gameUI = document.getElementsByClassName("gameUI")[0];
var gameUI2 = document.getElementsByClassName("gameUI2")[0];
var rock = document.getElementsByClassName("rock2")[0];
var paper = document.getElementsByClassName("paper2")[0];
var scissors = document.getElementsByClassName("scissors2")[0];
var rock2 = document.getElementsByClassName("rock3")[0];
var paper2 = document.getElementsByClassName("paper3")[0];
var scissors2 = document.getElementsByClassName("scissors3")[0];
var score = "0";

// ****************** Get User Choice **********************//

for (i = 0; i < weapons.length; i++) {
  weapons[i].addEventListener("click", function handler() {
    var userChoice = this.getAttribute("name");
    console.log("You picked " + userChoice);
    hide(gameUI);
    show(gameUI2);
    if (userChoice == "rock") {
      show(rock);
    } else if (userChoice == "paper") {
      show(paper);
    } else if (userChoice == "scissors") {
      show(scissors);
    }
    houseChoice();
    console.log("House picked "+ housePick);
    evaluateWinner(userChoice, housePick);
  });
};

// ******************  EVALUATE WINNER *********************//

function evaluateWinner(user, house) {
  if (user == "rock" && house == "paper") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU LOOSE";
  } else if (user == "rock" && house == "scissors") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU WIN";
  } else if (user == "rock" && house == "rock") {
    document.getElementsByClassName("win-loose")[0].innerText = "DRAW";
  } else if (user == "paper" && house == "rock") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU WIN";
  } else if (user == "paper" && house == "scissors") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU LOOSE";
  } else if (user == "paper" && house == "paper") {
    document.getElementsByClassName("win-loose")[0].innerText = "DRAW";
  } else if (user == "scissors" && house == "paper") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU WIN";
  } else if (user == "scissors" && house == "rock") {
    document.getElementsByClassName("win-loose")[0].innerText = "YOU LOOSE";
  } else if (user == "scissors" && house == "scissors") {
    document.getElementsByClassName("win-loose")[0].innerText = "DRAW";
  }
  if (document.getElementsByClassName("win-loose")[0].innerText == "YOU WIN"){
    score ++;
  }
  document.getElementsByClassName("score")[0].innerText = score;
};

//************** SIMULATE HOUSE CHOICE ********************//

function houseChoice() {
  var rdm = Math.floor(Math.random() * 3);
  var possibleChoices = ["paper", "rock", "scissors"];
  housePick = possibleChoices[rdm];
  if (housePick == "rock") {
    show(rock2);
  } else if (housePick == "paper") {
    show(paper2);
  } else if (housePick == "scissors") {
    show(scissors2);
  }
  return housePick;
};


// ******************* RULES PANEL CONTROL ******************//

rulesButton.addEventListener("click", function() {
  if (rulesPanel.classList.contains("hidden")) {
    show(rulesPanel);
    show(dim);
  } else {
    hide(rulesPanel);
    hide(dim);
  }
});

rulesClose.addEventListener("click",
  function() {
    hide(rulesPanel);
    hide(dim);
  });

// ******************* RESTART GAME ***********************//

document.getElementsByClassName("play-again-btn")[0].addEventListener("click",function restart(){
  show(gameUI);
  hide(gameUI2);
  hide(rock);
  hide(rock2);
  hide(paper);
  hide(paper2);
  hide(scissors);
  hide(scissors2);
});


//********************* UTILITY FUNCTIONS ********************//

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};
