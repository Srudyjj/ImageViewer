const preloader = {
  element: document.getElementById('preloader'),
  show: function () {
    this.element.style.display = 'flex';
  },
  hide: function () {
    this.element.style.display = 'none';
  }
};

export default preloader;