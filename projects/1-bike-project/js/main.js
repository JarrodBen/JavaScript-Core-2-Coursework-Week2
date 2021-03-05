let jumboTrn = document.getElementsByClassName("jumbotron")
let bikeBtn = document.getElementsByClassName("btn-lrg")
let volBtn = document.getElementsByClassName("btn-secondary")

let btnBlue = document.getElementById("blueBtn")
let btnOrange = document.getElementById("orangeBtn")
let btnGreen = document.getElementById("greenBtn")

// Functions for all three themes
// Function for the blue theme

var blueButn = function () {
    jumboTrn[0].style.backgroundColor = "#588fbd"
    bikeBtn[0].style.backgroundColor = "#ffa500"
    volBtn[0].style.backgroundColor = "black"
    volBtn[0].style.color = "white"
}

btnBlue.addEventListener("click", blueButn)

//Function for the orange theme

var orangeButn = function () {
    jumboTrn[0].style.backgroundColor = "#f0ad4e"
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

let regForm = document.getElementsByTagName("form")[0]
let emailField = document.getElementById("exampleInputEmail1")
let nameField = document.getElementById("example-text-input")
let textBox = document.getElementById("exampleTextArea")
let subBtn = document.getElementsByTagName("form")[0][3]
subBtn.setAttribute("id", "subBtn")

  var submitButn = function (x){
    x.preventDefault();
    let registerEg = /@/;
    for (let y = 0; y < regForm.length-1 ; y++){
        if (regForm[y].value === ""){
            regForm[y].style.backgroundColor = "red";
        } else if (regForm[y] === emailField && registerEg.test(regForm[y].value) === false){
            regForm[y].style.backgroundColor = "red";
        } 
    }
    if (regForm[0].value.length > 0 && regForm[1].value.length > 0 && regForm[2].value.length > 0 ) {
        alert("Thank you for filling out this form, have a great day!");
    }

    regForm.reset();
}

subBtn.addEventListener('click', submitButn);