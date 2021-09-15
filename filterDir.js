var fs = require('fs');
var path = require('path');
module.exports =  function filterDir (pathfile,extension,callback) { 
    fs.readdir(pathfile, function (err, list) { 
    if (err) {
        return callback(err);
    };
    var filterElement = (list.map(file => {path.join(pathfile,file)}).filter((element) => {
        path.extname(element) === '.'+extension ;   
    }));
    callback(null, filterElement)
    });
}

