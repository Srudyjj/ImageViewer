export default class Favorites {

  get() {

  }

  _add(id, data) {
    data.some(el => {
      if(el.id === +id) {         
        localStorage.setItem(el.id, JSON.stringify(el));
       }
    });
    
  }

  _remove(id, data) {
    data.some(el => {
      if(el.id === +id) {         
        localStorage.removeItem(el.id, JSON.stringify(el));
       }
    });
  }

  handler(data) {
    const container = document.querySelector('.catalog_images');
    container.addEventListener('click', (e) => {
      if(e.target.className === 'star' ) {
        const id = e.target.parentElement.querySelector('img').id;
        this._add(id, data)
        e.target.className = 'star added';
      } else if (e.target.className === 'star added') {
        const id = e.target.parentElement.querySelector('img').id;
        this._remove(id, data)
        e.target.className = 'star';
      }
    })
  }
}
