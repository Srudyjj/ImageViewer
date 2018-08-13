import { preloader, sideMenu, imagePopup } from "./staff";
import Gallery from "./gallery";
import UI from "./ui";
import Filters from "./filter";
import Favorites from "./favorites";

class HomePage{  

  constructor(url) {
    this.url = url;
    this.gallery = new Gallery;
    this.ui = new UI;
    this.favorites = new Favorites;
  }
  
  fetchImages() {
    this.gallery.getImages(this.url)
    .then(res => {
      this._init(res);
      preloader.hide();      
    })
    .catch(err => {
      alert(`Something went wrong: status code ${err}`);
      preloader.hide();
    })
  }

  _init(res) {
    let sizeList = [];
    let authors = []
    this.ui.renderAuthors(res);
    this._getFilterData(res, sizeList, authors);
    this._getAuthorsList(res, sizeList, authors);
    this._getSizeList(res, sizeList, authors);
    this.favorites.handler(res);
  }

  _getFilterData(res, sizeList, authors) {
    const filters = new Filters(res);
    filters.getWorksOfAuthors(authors);
    filters.sizeFilter(sizeList);
    this.ui.render(filters.renderData);
  }

  _getAuthorsList(res, sizeList, authors) {
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
      this._getFilterData(res, sizeList, authors);
    })
  }

  _getSizeList(res, size, authors) {
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
      this._getFilterData(res, size, authors);
    })
  }
}

class FavoritesPage extends HomePage{

  constructor() {
    super();
  }

  fetchImages() {
    this.favorites.getImages()
    .then(res => {
      this._init(res);
      preloader.hide();    
    })
    .catch(err => {
      alert(`Something went wrong: ${err}, check your localstorage`);
      preloader.hide();  
    })
  }
}

class PageState{
  constructor() {
    this.curentState = new HomePage('https://picsum.photos/list');
  }

  change(state) {
    preloader.show();
    this.curentState = state;
    this.curentState.fetchImages();
  }

  init() {
    this.change(new HomePage('https://picsum.photos/list'));
  }
}

window.addEventListener('load', () => {
  
  const pageState = new PageState;
  pageState.init();

  document.getElementById('home').addEventListener('click', (e) => {
    pageState.change(new HomePage('https://picsum.photos/list'));
    e.preventDefault();
  });
  
  document.getElementById('favorites').addEventListener('click', (e) => {
    pageState.change(new FavoritesPage);
    e.preventDefault();
  });

  sideMenu.toggle();
  imagePopup.hendler();

})


