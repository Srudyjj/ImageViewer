class Filters {
  constructor(dataFromAPI) {
    this.data = dataFromAPI;   
    this.authors = [];    
    this.renderData = this.data;
    this.size = ["large","medium", "small"];
  }

  authorsFinder() {
    let authorsSet = new Set();
    this.data.forEach(img => {
      authorsSet.add(img.author);
    });
    this.authors = Array.from(authorsSet).sort();
  }

  getWorksOfAuthors(authors) {
    if (authors.length !== 0) {
      this.renderData = [];
      authors.forEach((author => {
        this.data.forEach((img) => {
          if(img.author === author) {
            this.renderData.push(img)
          }
        });
      }));       
    }
  }

  sizeFilter() {
    if (this.size.length !== 0) {
      console.log("This is size");
      
      const newRenderDate = this.renderData;
      this.renderData = [];   
      this.size.forEach(size => {
        if(size === "large") {
          console.log("This is large");
          newRenderDate.forEach((img) => {
            if(img.width >= 1500) {
              this.renderData.push(img)
            }
          })
        } else if ((size === "medium")) {
          console.log("This is medium");
          newRenderDate.forEach((img) => {
            if(img.width >= 800 && img.width < 1500) {
              this.renderData.push(img)
            }
          })
        } else if ((size === "small")) {
          console.log("This is small");
          newRenderDate.forEach((img) => {
            if(img.width >= 800 && img.width < 1500) {
              this.renderData.push(img)
            }
          })
        }
      })
    }
  }
}

