const { mean, generateRandomScores } = require('./notation');
describe('Testing fileImport functions', () => {
    test('Average score is calculated correctly based on random scores', () => {
        const scores = generateRandomScores(5, 0, 100);
        const average = mean(scores);
        expect(average).toBeGreaterThanOrEqual(0);
        expect(average).toBeLessThanOrEqual(100);
    });
    
    test('Random scores are maintained within specified range', () => {
        const scores = generateRandomScores(5, 1, 10);
        scores.forEach(score => {
            expect(score).toBeGreaterThanOrEqual(1);
            expect(score).toBeLessThanOrEqual(10);
        });
    });
});