function startGame(event) {
  event.preventDefault();
  
  var player1Name = document.getElementById("player1Name").value;
  var player2Name = document.getElementById("player2Name").value;
  
  // You can perform any necessary validation or checks here
  
  // Redirect to the game page with the player names as URL parameters
  window.location.href = "game.html?player1=" + encodeURIComponent(player1Name) + "&player2=" + encodeURIComponent(player2Name);
}
window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  var player1Name = urlParams.get("player1");
  var player2Name = urlParams.get("player2");

  document.getElementById("player1Name").innerText = player1Name;
  document.getElementById("player2Name").innerText = player2Name;
  document.getElementById("gameTitle").innerText = player1Name + " vs " + player2Name;
};
function rollDice(player) {
  var player1Name = document.getElementById("player1Name").innerText;
  var player2Name = document.getElementById("player2Name").innerText;

  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomImageSource = "images/dice" + randomNumber + ".png";

  document.querySelector(".img" + player).setAttribute("src", randomImageSource);

  var randomNumber1 = parseInt(document.querySelector(".img1").getAttribute("src").charAt(11));
  var randomNumber2 = parseInt(document.querySelector(".img2").getAttribute("src").charAt(11));

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 " + player1Name + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2Name + " Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

