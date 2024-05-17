const fs = require('fs');

try {
  // Delete the file if it exists
  if (fs.existsSync('file.txt')) {
    fs.unlinkSync('file.txt');
    console.log('File deleted successfully.');
  }

  // Remove the directory if it is empty
  if (fs.readdirSync('my-directory').length === 0) {
    fs.rmdirSync('my-directory');
    console.log('Directory removed successfully.');
  } else {
    console.log('Directory is not empty.');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
