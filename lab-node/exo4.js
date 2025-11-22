
// exo4.js (modified)
const fs = require('fs');


// Get the filename and text from the command line arguments
const filename = process.argv[2]; // The first argument is the filename
const text = process.argv[3]; // The second argument is the text to save

// Write the text to the specified file
fs.writeFile(filename, text, (err) => {
    if (err) {
        console.error('Error while creating the file:', err);
        return;
    }
    console.log('The file has been saved!');

    // Read the contents of the created file
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error while reading the file:', err);
            return;
        }
        console.log(data);
    });
});