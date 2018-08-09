export default class Filters {
  constructor(dataFromAPI) {  
    this.data = dataFromAPI;
    this.renderData = this.data;
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

  sizeFilter(sizeList) {
    if (sizeList.length !== 0) {
      const newRenderDate = this.renderData;
      this.renderData = [];   
      sizeList.forEach(size => {
        if(size === "large") {
          newRenderDate.forEach((img) => {
            if(img.width >= 1500) {
              this.renderData.push(img)
            }
          })
        } else if ((size === "medium")) {
          newRenderDate.forEach((img) => {
            if(img.width >= 800 && img.width < 1500) {
              this.renderData.push(img)
            }
          })
        } else if ((size === "small")) {
          newRenderDate.forEach((img) => {
            if(img.width < 800) {
              this.renderData.push(img)
            }
          })
        }
      })
    }
  }

}

