// class = es un plano

class BookStore {
  constructor() { // Las variables tienen que ir dentro del constructor
    this.books = [];
    this.url = "https://api.myjson.com/bins/p803g";

    this.getData();
    this.activateListener();
  }

  getData() {
    fetch(this.url)
      .then(data => data.json())
      .then(json => {
        this.books = json.books;
        this.printBooks(this.books);
      })
      .catch(error => alert(error));
  }

  printBooks(books) {
    let template = "";
    books.forEach(book => {
      template += `
      <div class="flip-container">
        <div class="flipper">
          <div class="front">
            <img class="portada" src="${book.portada}">
          </div>
          <div class="back">
            <p>${book.titulo}</p>
            <p class="desc">${book.descripcion}</p>
            <a data-fancybox="gallery" href="${book.detalle}"><button>More info</button></a>
          </div>
        </div>
      </div>
      `;
    });

    document.querySelector(".container").innerHTML = template;
  }

  searchBook(str) {
    let newBooks = this.books.filter(book => book.titulo.includes(str));
    this.printBooks(newBooks);
  }

  activateListener() {
    document.getElementById("input").addEventListener("keyup", () => {
      this.searchBook(document.getElementById("input").value)
    })
  }
}

let bs = new BookStore();
