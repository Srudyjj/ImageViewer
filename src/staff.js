export const preloader = {
  element: document.getElementById('preloader'),
  show: function () {
    this.element.style.display = 'flex';
  },
  hide: function () {
    this.element.style.display = 'none';
  }
};

export const sideMenu = {
  menu: document.getElementById('filter'),
  button: document.getElementById('menu-btn'),
  catalog: document.querySelector('.catalog'),
  bodyHtml : document.querySelector('body, html'),
  toggle: function () {
    this.button.onclick = () => {
      this.menu.classList.toggle("filter_active");
      this.catalog.classList.toggle("catalog_deactive");
      this.bodyHtml.classList.toggle('deactive-scroll');
      this.button.classList.toggle('menu-btn_active');
    }
  }
};

export const imagePopup = {
  container: document.querySelector('.catalog_images'),
  popup: document.querySelector('.img-popup'),
  closebtn: document.querySelector('.close'),
  bodyHtml : document.querySelector('body, html'),
  hendler: function () {
    this.container.onclick = (e) => {
      
      if (e.target.tagName === "IMG") {
        const src = e.target.src;
        const img = this.popup.querySelector('img');
        img.src = src;
        this.popup.classList.add("img-popup_active");
        this.bodyHtml.classList.toggle('deactive-scroll');
      }

      this.closebtn.onclick = (e) => {
        this.popup.classList.remove("img-popup_active");
        this.bodyHtml.classList.toggle('deactive-scroll');
      }
    }
  }
}