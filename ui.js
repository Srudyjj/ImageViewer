class UI {

  constructor() {
    this.container = document.querySelector(".catalog_images");
    this.backward = document.querySelector(".pagination_backward");  
    this.page = document.querySelector(".pagination_num");
    this.forward = document.querySelector(".pagination_forward");
  }

  _paint(data) {
    let renderImgs = "";
    data.forEach(img => {
      const element = `
      <div class="img_wrapper" >
        <img src="https://picsum.photos/${img.filename}">
        <span class="star"></span>
      </div>
      `
      renderImgs += element;
    });
    this.container.innerHTML = renderImgs;
  }

  _pagination(data) {
    let from = 0;
    let to = 20;
    let page = 1;
    const quantity = data.length;
    let renderData = data.slice(from, to);
    this._paint(renderData);
    this.page.textContent = page;

    const previous = () => {
      if(from >= 20) {
        to -= 20;
        from -= 20;
        page -= 1;
        renderData = data.slice(from, to);
        this.page.textContent = page;
        this._paint(renderData);
      }     
    };

    const next = () => {
      if(to < quantity) {
        to += 20;
        from += 20;
        page += 1;
        renderData = data.slice(from, to);
        this.page.textContent = page; 
        this._paint(renderData);
      }
    }

    this.backward.addEventListener("click", () => {
      previous();
    });
    this.forward.addEventListener("click", () => {
      next();
    });
  }

  _filter(data) {

  }

  render(data) {
    this._pagination(data);
  }
}