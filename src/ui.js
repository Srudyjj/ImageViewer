export default class UI {
  constructor() {
    this.data;
  }

  _paint(data) {
    let renderImgs = "";
    const container = document.querySelector(".catalog_images");
    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    data.forEach(img => {
      const image = document.createElement('img');
      image.src = `https://picsum.photos/${img.filename}`;
      image.id = img.id;

      const imgWrapper = document.createElement('div');
      imgWrapper.className = "img_wrapper";

      const star = document.createElement('span');
      star.className = "star";

      imgWrapper.appendChild(image);
      imgWrapper.appendChild(star);
      fragment.appendChild(imgWrapper);
    });

    container.appendChild(fragment);

    this._setFavorites();
  }

  _setFavorites() {
    const len = localStorage.length;
    for (let i = 0; i < len; i++) {
      const id = localStorage.key(i);
      const img = document.getElementById(id);
      if (img) {
        const btn = img.parentElement.querySelector('.star');
        btn.className = 'star added';
      }     
    }
  }

  _pagination(data) {
    this.data = data;
    let from = 0;
    let to = 20;
    let pageNum = 1;
    const backward = document.querySelector(".pagination_backward");  
    const pageHtml = document.querySelector(".pagination_num");
    const forward = document.querySelector(".pagination_forward");  
    
    let renderData = this.data.slice(from, to);
    pageHtml.textContent = pageNum;
    
    this._paint(renderData);

    const previous = (data) => {
      if(from >= 20) {
        to -= 20;
        from -= 20;
        pageNum -= 1;
        renderData = data.slice(from, to);
        pageHtml.textContent = pageNum;
        this._paint(renderData);
      }     
    };

    const next = (data) => {
      const quantity = data.length;      
      if(to < quantity) {
        to += 20;
        from += 20;
        pageNum += 1;
        renderData = data.slice(from, to);
        pageHtml.textContent = pageNum;
        this._paint(renderData);
      }
    }

    backward.addEventListener("click", () => {
      previous(this.data);
    });
    forward.addEventListener("click", () => {
      next(this.data);
    });
  }

  render(data) {
    this._pagination(data);
  }

  renderAuthors(data) {
    const container = document.querySelector('.f-authors_container');
    container.innerHTML = '';
    const authors = () => {
      let authorsSet = new Set();
      data.forEach(img => {
        authorsSet.add(img.author);
      });
      return Array.from(authorsSet).sort();
    };
    
    authors().forEach((name, index) => {
      let author =`
        <label class="form_label" for="author${index}">${name}
          <input type="checkbox" id="author${index}">
          <span class="checkbox-btn"></span>
        </label>
      `
      container.innerHTML += author;
    })
  }
}