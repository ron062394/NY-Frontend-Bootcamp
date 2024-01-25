const fs = require('fs');

const directoryPath = 'some_directory';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Files in the directory:', files);
});
