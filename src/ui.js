export default class UI {
  constructor() {
    this.data;
  }

  _paint(data) {
    let renderImgs = "";
    const container = document.querySelector(".catalog_images");
    data.forEach(img => {
      const element = `
      <div class="img_wrapper" >
        <img src="https://picsum.photos/${img.filename}" id=${img.id} >
        <span class="star"></span>
      </div>
      `
      renderImgs += element;
    });
    
    container.innerHTML = renderImgs;
  }

  _pagination(data) {
    this.data = data;
    let from = 0;
    let to = 20;
    let pageNum = 1;
    const backward = document.querySelector(".pagination_backward");  
    const pageHtml = document.querySelector(".pagination_num");
    const forward = document.querySelector(".pagination_forward");
    const quantity = data.length;
    console.log(quantity);
    
    let renderData = this.data.slice(from, to);
    pageHtml.textContent = pageNum;
    
    this._paint(renderData);

    const previous = (data) => {
      if(from >= 20) {
        to -= 20;
        from -= 20;
        pageNum -= 1;
        console.log(data);
        renderData = data.slice(from, to);
        pageHtml.textContent = pageNum;
        console.log(renderData);
        console.log(this);
        this._paint(renderData);
      }     
    };

    const next = (data) => {
      const quantity = data.length;      
      if(to < quantity) {
        to += 20;
        from += 20;
        pageNum += 1;
        console.log(data);
        renderData = data.slice(from, to);
        pageHtml.textContent = pageNum;
        console.log(renderData);
        console.log(this);
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

  static renderAuthors(dataFromAPI) {
    const container = document.querySelector('.f-authors_container');
    const authors = () => {
      let authorsSet = new Set();
      dataFromAPI.forEach(img => {
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