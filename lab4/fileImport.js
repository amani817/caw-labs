// fileImport.js
const { mean, generateRandomScores } = require('./notation');
const randomScores = generateRandomScores(5); 
console.log(`Random scores: ${randomScores}`);
console.log(`Average score: ${ mean(randomScores)}`);
