// player 1 changing images for a different output

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var img1 = document.querySelector("img.img1");
var img1Src = "./images/dice" + randomNumber1 + ".png";
img1.setAttribute("src", img1Src)

// player 2 changing images for a different output

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var img2 = document.querySelector("img.img2");
var img2Src = "./images/dice" + randomNumber2 + ".png";
img2.setAttribute("src", img2Src)

//determining winner or a draw

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}