var imgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = Math.floor(Math.random() * 6);
var randomDie1 = imgArray[randomNumber1];
document.querySelector('.img1').setAttribute("src", randomDie1);

var randomNumber2 = Math.floor(Math.random() * 6);
var randomDie2 = imgArray[randomNumber2];
document.querySelector('.img2').setAttribute("src", randomDie2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw...";
}

/*
This Also Possible

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImgSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImgSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImgSource2);
*/
