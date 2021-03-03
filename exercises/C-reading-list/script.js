function readingList() {
  let content = document.getElementById("content");

  let headingOne = document.createElement("h1")
  headingOne.textContent = "Reading List";
  content.appendChild(headingOne)

  let bookList = document.createElement("ul")

  for (let book of books) {
    let eachBook = document.createElement("li");
    eachBook.classList.add("readingList");

    if (book.alreadyRead) {
      eachBook.classList.add("haveRead")
    } else {
      eachBook.classList.add("haveNotRead")
    }

    let bookContent = document.createElement("p");
    bookContent.textContent = `${book.title} - ${book.author}`

    let bookImg = document.createElement("img");
    bookImg.setAttribute("src", "./Images/" + `${book.title}` + ".jpg")
    bookImg.setAttribute("alt", "This is the book cover of " + `${book.title}`)
    bookImg.classList.add("bookCover")
    bookImg.classList.add("bookCover")

    eachBook.append(bookContent, bookImg);
    bookList.appendChild(eachBook);
  }
  content.appendChild(bookList)
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);