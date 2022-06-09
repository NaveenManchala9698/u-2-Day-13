const grid = document.querySelector(".container > .row");

const books = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const bookList = await response.json();

  bookList.forEach((book) => {
    const col = document.createElement("div");
    col.className = "col-md-3";

    col.innerHTML = `<div class="single-album card mb-4 shadow-sm">
    <img src= ${book.img} class="card-img-top" alt="${book.title}">
    <div class="card-body">
        <h5 class="card-title">${book.title}<h5>
        <p class="card-text">
            ${book.category}
        </p>
        <div
            class="d-flex justify-content-between align-items-center"
        >
            <div class="btn-group">
                <button
                    type="button"
                    id="cartbtn"
                    class="btn btn-sm btn-outline-secondary"
                    onclick = "added(event)"
                >
                    Add to Cart
                </button>
                <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick = "skipCard(event)"
                >
                    Skip
                </button>
            </div>
        </div>
    </div>
</div>`;
    grid.appendChild(col);
  });
};
books();

let selected = 0;

const addToCart = (event) => {
  let clickedBook = event.target.closest(".card").querySelector("h5").innerHTML;
  console.log(clickedBook);

  let bookImage = event.target.closest(".card").querySelector("img");
  console.log(bookImage);

  selected += 1;
  document.querySelector("").innerHTML = selected;

  const cardOne = event.target.parentElement;
  cardOne.classList.toggle("clicked-card");
};

//6
const skipCard = (e) => {
  e.target.closest(".col-md-3").remove();
};

//4
const added = (e) => {
  let eachCard = e.target.closest(".card");
  eachCard.classList.add("addBg");
};
