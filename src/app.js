import Gallery from "./gallery";
import UI from "./ui";
import Filters from "./filter";
import Favorites from "./favorites";

const gallery = new Gallery;
const ui = new UI;
const favorites = new Favorites;


getImagesFromAPI('https://picsum.photos/list');

function getImagesFromAPI(url) {
  gallery.getImages(url)
    .then(res => {
      let sizeList = [];
      let authors = []
      UI.renderAuthors(res);
      start(res, sizeList, authors);
      getAuthors(res, sizeList, authors);
      getSize(res, sizeList, authors);


      favorites.handler(res);
    })
    // .catch(err => {alert(`Something went wrong: status code ${err}`)})
}


function start(res, sizeList, authors) {
  const filters = new Filters(res);
  filters.getWorksOfAuthors(authors);
  filters.sizeFilter(sizeList);
  ui.render(filters.renderData);
}

function getAuthors(res, sizeList, authors) {
  const form = document.getElementById("f-author");
  form.addEventListener('change', (e) => {
    const input = e.target;   
    const authorName = input.parentElement.textContent.trim();
    if (input.checked === true) {
      authors.push(authorName);
    } else {
      const i = authors.indexOf(authorName);
      if(i != -1) {
        authors.splice(i, 1);
      }
    }
    start(res, sizeList, authors);
  })
};

function getSize(res, size, authors) {
  const form = document.getElementById("f-size");
  form.addEventListener('change', (e) => {
    const input = e.target;
    if (input.checked === true) {
      size.push(input.id);
    } else {
      const i = size.indexOf(input.id);
      if(i != -1) {
        size.splice(i, 1);
      }
    }
    start(res, size, authors);
  })
};

