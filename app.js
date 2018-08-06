const gallery = new Gallery;
const ui = new UI;

getImages('https://picsum.photos/list');



function getImages(url) {
  gallery.getImages(url)
    .then(res => {
      console.log(res);
      ui.render(res)
    })
    .catch(err => {alert(`Something went wrong: status code ${err}`)})
}


