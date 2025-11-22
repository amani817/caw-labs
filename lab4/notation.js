// notation.js
function mean(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}
function generateRandomScores(numScores, min = 0, max = 100) {
    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = Math.floor(Math.random() * (max - min + 1)) + min;
        scores.push(score);
    }
    return scores;
}
module.exports = { mean, generateRandomScores }; 