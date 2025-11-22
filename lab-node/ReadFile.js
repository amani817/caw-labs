// ReadFile.js
const fs = require('fs');

const filename = process.argv[2]; 
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }
    console.log(data);
});