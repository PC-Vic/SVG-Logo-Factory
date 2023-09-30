
const { Square, Circle, Triangle } = require('./lib/shapes'); 
const fs = require('fs');
const inquirer = require('inquirer');


const mockUserInput = {
    shape: 'Square',
    text: 'Test',
    shapeColor: 'Red',
    textColor: 'Green',
};


jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValue(mockUserInput),
}));


jest.mock('fs', () => ({
    writeFile: jest.fn((filename, data, callback) => {
        
    }),
}));

describe('SVG Logo Factory', () => {
    it('should create an SVG logo based on user input', async () => {
        const { getUserInput } = require('./index'); 
        await getUserInput();


        expect(fs.writeFile).toHaveBeenCalledWith('shape.svg', expect.any(String), expect.any(Function));


        console.log('Test passed: SVG logo creation');
    });

});
