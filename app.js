/**
 * Scoreboard Homework
 * @author Jaykob Walson
 */
var buildUp = new Audio("sounds/buildup.mp3");
var charge1 = new Audio("sounds/charge1.mp3");
var charge2 = new Audio("sounds/charge2.mp3");

var teamPlaying = document.getElementById("teams").value;
let teamSelect = document.getElementById("teams");
teamSelect.addEventListener("change", function () {
  teamPlaying = teamSelect.value;
});

var inning = document.getElementById("inning");
var inningnumber = parseInt(inning.value);
inning.addEventListener("change", function () {
  inningnumber = parseInt(inning.value);
  console.log(inning.value);
});

let add = document.getElementById("add");
add.addEventListener("click", function () {
  if (teamPlaying == "homeTeam") {
    let newInning = "home" + inningnumber;
    let oldInning = parseInt(document.getElementById(newInning).innerHTML);
    document.getElementById(newInning).innerHTML = oldInning + 1;
    let oldHomeScore = parseInt(document.getElementById("homeTotal").innerHTML);
    console.log(document.getElementById("homeTotal").innerHTML);
    document.getElementById("homeTotal").innerHTML = oldHomeScore + 1;
  } else if (teamPlaying == "awayTeam") {
    let newInning = "away" + inningnumber;
    let oldInning = parseInt(document.getElementById(newInning).innerHTML);
    document.getElementById(newInning).innerHTML = oldInning + 1;
    let oldAwayScore = parseInt(document.getElementById("awayTotal").innerHTML);
    console.log(oldAwayScore);
    document.getElementById("awayTotal").innerHTML = oldAwayScore + 1;
  }
});

let subtract = document.getElementById("subtract");
subtract.addEventListener("click", function () {
  if (teamPlaying == "homeTeam") {
    let newInning = "home" + inningnumber;
    let oldInning = parseInt(document.getElementById(newInning).innerHTML);
    if (oldInning > 0) {
      document.getElementById(newInning).innerHTML = oldInning - 1;
      let oldHomeScore = parseInt(
        document.getElementById("homeTotal").innerHTML
      );
      console.log(document.getElementById("homeTotal").innerHTML);
      document.getElementById("homeTotal").innerHTML = oldHomeScore - 1;
    }
  } else if (teamPlaying == "awayTeam") {
    let newInning = "away" + inningnumber;
    let oldInning = parseInt(document.getElementById(newInning).innerHTML);
    if (oldInning > 0) {
      document.getElementById(newInning).innerHTML = oldInning - 1;
      let oldAwayScore = parseInt(
        document.getElementById("awayTotal").innerHTML
      );
      console.log(document.getElementById("awayTotal").innerHTML);
      document.getElementById("awayTotal").innerHTML = oldAwayScore - 1;
    }
  }
});

let chargeUp = document.getElementById("tune");
chargeUp.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    buildUp.play();
  } else if (random == 1) {
    charge1.play();
  } else {
    charge2.play();
  }
});

let polka = document.getElementById("memeSong");
polka.addEventListener("click", function () {});
