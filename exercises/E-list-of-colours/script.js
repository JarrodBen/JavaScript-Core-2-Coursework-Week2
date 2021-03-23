let colourDiv = document.getElementById("content");
let colourP = document.createElement("p");

let colourSelect = document.createElement("select");

let colourSelected = document.createElement("option");

function listOfColours(colours) {
  colourSelect.name = "colours";
  colourDiv.append(colourSelect);
  colourDiv.append(colourP);
  colourSelect.append(colourSelected);

  for (let x = 1; x < colours.length+1; x++) {
    colourSelected.value = colours[x - 1];
    colourSelected.textContent = colours[x - 1];
    colourSelect.append(colourSelected);
}

    var selectColour = function () {
        colourP.innerText = "You have selected: " + colourSelect.value;
        colourP.style.color = colourSelect.value;    
    }

colourSelect.addEventListener("change", selectColour);
}
const colours = ["red", 
                "blue", 
                "green", 
                "yellow", 
                "pink", 
                "brown"];

listOfColours(colours);
