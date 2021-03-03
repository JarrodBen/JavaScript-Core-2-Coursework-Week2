function shoppingList() {
  let content = document.getElementById("content");
  let listUl = document.createElement('ul');
  content.append(listUl)

  for (let x = 0; x < shopping.length; x++) {
    let itemLi = document.createElement('li');
    itemLi.textContent = shopping[x];
    listUl.append(itemLi)
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
