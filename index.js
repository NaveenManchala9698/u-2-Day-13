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

//6
const skipCard = (e) => {
  e.target.closest(".col-md-3").remove();
};

//4

const cartItems = books.filter((book) =>
  book.title.toLowerCase().includes(query.toLowerCase())
);

console.log(cartItems.length);
