const fs = require("fs");

// import gallery from "./gallery";
const gallery = require("./gallery");
const fetch = require('node-fetch');

console.log(gallery);

gallery.getImages("https://picsum.photos/list")
.then(res => {
  const json = JSON.stringify(res);

  fs.writeFile("galerry.json", json, "utf8", function(error){
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    var data = fs.readFileSync("galerry.json", "utf8");
    console.log(JSON.parse(data));  // выводим считанные данные
  });
  
});


 
