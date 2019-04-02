const fs = require('fs');
// var path = require('path');
//

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`file contents: ${data}`);
  });

  console.log('reading file');
}

cat('one.txt');
