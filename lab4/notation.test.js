const { mean, generateRandomScores } = require('./notation');

describe('Testing notation functions', () => {
    
    test('mean() calculates the average of randomly generated scores', () => {
        // Générer un tableau de scores aléatoires
        const scores = generateRandomScores(5, 50, 100); // 5 scores entre 50 et 100
        const average = mean(scores);
        // Vérifier si la moyenne est dans la plage attendue
        expect(average).toBeGreaterThanOrEqual(50);
        expect(average).toBeLessThanOrEqual(100);
    });
    test('generateRandomScores() generates the correct number of scores', () => {
        const scores = generateRandomScores(5);
        expect(scores.length).toBe(5);

        const scoresMin = generateRandomScores(5, 10, 20);
        scoresMin.forEach(score => {
            expect(score).toBeGreaterThanOrEqual(10);
            expect(score).toBeLessThanOrEqual(20);
        });
    });
});