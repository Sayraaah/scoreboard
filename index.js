let homeScore = 0;
let awayScore = 0;

function addHome(points) {
  homeScore += points;
  document.getElementById("home-score").textcontent = homeScore;
}

function addAway(points) {
  AwayScore += points;
  document.getElementById("away-score").textcontent = guestScore;
}
