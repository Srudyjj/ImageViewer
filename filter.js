class Filters {
  constructor(dataFromAPI) {
    this.data = dataFromAPI;   
    this.authors = [];    
    this.renderData = this.data;
  }

  authorsFinder() {
    let authorsSet = new Set();
    this.data.forEach(img => {
      authorsSet.add(img.author);
    });
    this.authors = Array.from(authorsSet).sort();
  }

  getWorksOfAuthors(authors) {
    this.renderData = [];
    authors.forEach((author => {
      this.data.forEach((img) => {
        if(img.author === author) {
          this.renderData.push(img)
        }
      });
    }));
    console.log(this.renderData);
  }

  
}

