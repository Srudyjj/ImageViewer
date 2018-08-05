class UI {

  constructor() {
    this.container = document.querySelector(".catalog_images");   
  }

  paint(data) {
    data.forEach(img => {
      const element = `
      <div class="img_wrapper" >
        <img src="https://picsum.photos/${img.filename}">
        <span class="star"></span>
      </div>
      `
      this.container.innerHTML += element;
    });
  }
}