class Gallery {

  getImages(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if(response.status !== 200) {
            return reject(response.status);
          } else {
            return response.json();
          }
        })
        .then(responseData => resolve(responseData))
        .catch(err => reject(err))
    })
  }
}     

