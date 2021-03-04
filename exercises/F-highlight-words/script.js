function highlightWords(paragraph, colours) {
  let contentDiv = document.getElementById('content');
  let paragraphColour = document.createElement('p');
  let selectColour = document.createElement('select');
  selectColour.setAttribute('id', 'selectColours')
  contentDiv.append(selectColour);
  contentDiv.append(paragraphColour);



  for (let x=0; x<colours.length; x++){
    let dropSelect = document.createElement('option')
    dropSelect.innerText = colours[x];
    selectColour.append(dropSelect);
  }

  let paraColour = paragraph.split(" ");

  for (let y=0; y<paraColour.length; y++) {
    let spanFunc = document.createElement('span');
    spanFunc.innerText = paraColour[y] + " ";


  var highLightClr =  function(){
      let clrHighLight = document.getElementById('selectColours').value;
      console.log(clrHighLight);
      console.log(spanFunc);
      if (clrHighLight === 'none'){
        spanFunc.style.backgroundColor = "";
      } else if (clrHighLight == "yellow"){
        spanFunc.style.backgroundColor = "yellow";
        console.log(`i should be yellow`);
      } else if (clrHighLight === "green") {
        spanFunc.style.backgroundColor = "green";
      } else if  (clrHighLight === "blue") {
        spanFunc.style.backgroundColor = "blue";
      }
    }
    spanFunc.addEventListener('click', highLightClr)


    paragraphColour.append(spanFunc);
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
