var fs = require('fs') ;
var path = require("path");
fs.readdir(process.argv[2],function callback (err, list) { 
    if (err) {
        return console.error(err);
    };
   (list.filter((element) => {
        path.extname(element) === '.'+process.argv[3] ? console.log(element) : null ;
    } ))
   
});