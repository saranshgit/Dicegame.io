// generate a random number between 1 and 6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// get a reference to the dice image element

var imagech = "images/" + "dice" + randomNumber1 + ".png";
var dice = document.querySelectorAll("img")[0];

dice.setAttribute("src", imagech)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// get a reference to the dice image element

var imagech2 = "images/" + "dice" + randomNumber2 + ".png";
var dice = document.querySelectorAll("img")[1];

dice.setAttribute("src", imagech2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}