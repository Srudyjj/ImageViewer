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
}