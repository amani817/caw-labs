const { exf } = require('./echo');

describe('Testing echo function', () => {  
    test('exf() prints the string the correct number of times', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        exf("test", 3);
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith("test");

        exf("hello", 2);
        expect(logSpy).toHaveBeenCalledTimes(5); 
        expect(logSpy).toHaveBeenCalledWith("hello");

        logSpy.mockRestore(); 
    });
});