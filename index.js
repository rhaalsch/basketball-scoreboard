let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homePoints = 0;
let guestPoints = 0;

function homeAdd3() {
  homePoints += 3;
  homeScore.innerHTML = homePoints;
}

function homeAdd2() {
  homePoints += 2;
  homeScore.innerHTML = homePoints;
}

function homeAdd1() {
  homePoints += 1;
  homeScore.innerHTML = homePoints;
}

function guestAdd3() {
  guestPoints += 3;
  guestScore.innerHTML = guestPoints;
}

function guestAdd2() {
  guestPoints += 2;
  guestScore.innerHTML = guestPoints;
}
function guestAdd1() {
  guestPoints += 1;
  guestScore.innerHTML = guestPoints;
}
