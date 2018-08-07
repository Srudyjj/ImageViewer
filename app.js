const gallery = new Gallery;
const ui = new UI;


getImages('https://picsum.photos/list');



function getImages(url) {
  gallery.getImages(url)
    .then(res => {
      // console.log(res);
      const filters = new Filters(res);
      // filters.authorsFinder();

      const authors = ["Aaron Burden","Antoine Beauvillain", "Anton Sulsky", "Ariana Prestes", "Art Wave", "Artur Pokusin", "Arvee Marie", "Aurélien bellanger", "Austin Ban", "Austin Neill", "Austin Schmid", "Autumn Mott", "Axel  Antas-Bergkvist"]
      filters.getWorksOfAuthors(authors)

      ui.render(filters.renderData)
    })
    .catch(err => {alert(`Something went wrong: status code ${err}`)})
}


