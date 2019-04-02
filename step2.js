const fs = require('fs');
const axios = require('axios');

//mimic the UNIX utility, cat.
function read() {
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

//cat, but just for URLS
function webCat(URL) {
  axios
    .get('URL')
    .then(function(response) {
      //handle success
      console.log(`this is what the url says: ${response}`);
    })
    .catch(function(error) {
      //handle error
      console.log('error');
    })
    .then(function() {
      //always executed
    });
}
