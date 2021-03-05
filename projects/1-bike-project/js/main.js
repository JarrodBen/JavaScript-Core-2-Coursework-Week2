let jumboBtn = document.querySelectorAll(".jumbotron")
let bikeBtn = document.querySelectorAll(".btn-primary")
let volBtn = document.querySelectorAll(".btn-secondary")

let btnBlue = document.querySelectorAll("#blueBtn")
let btnOrange = document.querySelectorAll("#orangeBtn")
let btnGreen = document.querySelectorAll("#greenBtn")

// Functions for all three themes
// Function for the blue theme

var blueButn = function () {
    jumboBtn[0].style.backgroundColor = "#588fbd"
    bikeBtn[0].style.backgroundColor = "#ffa500"
    volBtn[0].style.backgroundColor = "black"
    volBtn[0].style.color = "white"
}

btnBlue.addEventListener("click", blueButn)

//Function for the orange theme

var orangeButn = function () {
    jumboBtn[0].style.backgroundColor = "#f0ad4e"
    bikeBtn[0].style.backgroundColor = "#5751fd"
    volBtn[0].style.backgroundColor = "#31b0d5"
    volBtn[0].style.color = "white"
}

btnOrange.addEventListener("click", orangeButn)

//Function for the green theme
var greenButn = function () {
    jumboBtn[0].style.backgroundColor = "#87ca8a"
    bikeBtn[0].style.backgroundColor = "black"
    volBtn[0].style.backgroundColor = "#8c9c08"
}

btnGreen.addEventListener("click", greenButn)