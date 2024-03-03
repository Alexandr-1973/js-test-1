
import axios from "axios";

let inLocalStorage = [];
function getServer() {
  for (let i = 0; i <= 9; i += 1) {

  };
}
  

const res = await axios.get("https://books-backend.p.goit.global/books/top-books");
console.log(res.data);

const images = [
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
  {
    book_image:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

    title: "LESSONS IN CHEMISTRY",

    list_name: "Audio Fiction",

    description:
      "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

    author: "Bonnie Garmus",

    amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

    appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

    id: "643282b1e85766588626a085",
  },
];

// const shopObject = {
//   preview:
//     "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//   original:
//     "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//   description: "Lighthouse Coast Sea",
// };
// shopObject = {
//   book_image:
//     "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",

//   title: "LESSONS IN CHEMISTRY",

//   list_name: "Audio Fiction",

//   description:
//     "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",

//   author: "Bonnie Garmus",

//   amazonUrl: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",

//   appleBooksUrl: "https://goto.applebooks.apple/9780593507537?at=10lIEQ",

//   id: "643282b1e85766588626a085",
// };

const addbtn = document.querySelector(".add-ls");
addbtn.addEventListener("click", onAddButton);

function onAddButton() {
  for (let image of images) {
    randomKey = "addbook";
    localStorage.setItem(randomKey, JSON.stringify(image));
  }
}
// `randomkey${Math.random()}`;
// const removebtn = document.querySelector(".remove-ls");
// removebtn.addEventListener("click", onRemoveButton);
// function onRemoveButton() {
//   removeItemLS(randomKey);
// };

// for (let image of images) {
//   randomKey = `randomkey${Math.random()}`;
//   localStorage.setItem(randomKey, JSON.stringify(image));
// }

let markup = "";

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i).includes("randomkey")) {
    const {
      book_image,
      title,
      list_name,
      description,
      author,
      amazonUrl,
      appleBooksUrl,
    } = JSON.parse(localStorage.getItem(localStorage.key(i)));
    markup += `<li class="shoppinglist-book">
          <img
            class="shoppinglist-book-image"
            src="${book_image}"
            alt="book image"
          />
          <div class="shoppinglist-total-div">
            <div class="shoppinglist-tb-div">
              <div class="shoppinglist-titcat-div">
                <h3 class="shoppinglist-book-title">${title}</h3>
                <p class="shoppinglist-book-category">${list_name}</p>
              </div>

              <button
                type="button"
                class="shoppinglist-book-deletebutton"
              ></button>
            </div>

            <div class="shoppinglist-desauthorlink">
              <p class="shoppinglist-book-description">${description}</p>

              <div class="shoppinglist-low-div">
                <p class="shoppinglist-book-author">${author}</p>
                <ul class="shoppinglist-book-low-ul">
                  <li class="shoppinglist-book-low-li-amazon">
                    <a
                      class="shopping-amazon-link"
                      href="${amazonUrl}"
                      target="_blank"
                    >
                      <img
                        class="shopping-listamazon-img"
                        src="./img/amazon.png"
                        alt="logoAmazon"
                      />
                    </a>
                  </li>
                  <li class="shoppinglist-book-low-li-apple">
                    <a
                      class="shopping-apple-link"
                      href="${appleBooksUrl}"
                      target="_blank"
                    >
                      <img
                        class="shopping-apple-img"
                        src="./img/apple.png"
                        alt="logo Apple books"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>`;
  }
}
if (markup) {
  document.querySelector(".books").innerHTML = markup;
} else {
  document.querySelector(".books").innerHTML = "";
}
