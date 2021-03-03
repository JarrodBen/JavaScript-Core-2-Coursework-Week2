function todoList(todos) {
  let listUl = document.createElement("ul");
  let content = document.getElementById("content");
  content.append(listUl);

  for (let y = 0; y < todos.length; y++) {
    let doItemList = document.createElement("li");
    doItemList.textContent = todos[y].todo;
    doItemList.addEventListener("click", function() {
      if (doItemList.classList.length === 0){
        doItemList.className = "strike";
      } else if (doItemList.className === "strike") {
        doItemList.classList.remove("strike")
      }
    })
    listUl.append(doItemList)
  }
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);