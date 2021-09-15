  const fs = require('fs') ;
  const text = fs.readFileSync(process.argv[2]);
  const str = text.toString().split('\n');
  console.log(str.length-1);