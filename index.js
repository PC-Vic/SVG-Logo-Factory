const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js');


function createSvgLogo(userInput) {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="${userInput.shapeColor}" />

 <circle cx="150" cy="100" r="80" fill="${userInput.shapeColor}" />

 <polygon points="150,20 190,160 110,160" fill="${userInput.shapeColor}" />

 <text x="150" y="150" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>
</svg>`
}


const customColors = [
    { name: 'Red', value: '#FF0000'},
    { name: 'Green', value: '#00FF00'},
    { name: 'Blue', value: '#0000FF'},
    { name: 'Yellow', value: '#FFFF00'},
];

async function getUserInput () {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Square', 'Triangle', 'Circle'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to 3 characters):',
            validate: function (input) {
                return input.length <= 3;
            },
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Chose a shape color:',
            choices: customColors.map(choice => choice.name),
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Chose a text color:',
            choices: customColors.map(choice => choice.name),
            
        },
    ]);
    
     // Map the user's color choices to their corresponding hexadecimal values
     answers.shapeColor = customColors.find(choice => choice.name === answers.shapeColor).value;
     answers.textColor = customColors.find(choice => choice.name === answers.textColor).value;
 
     let shape;

     if (answers.shape === 'Square') {
        shape = new Square(answers.text, answers.shapeColor, answers.textColor);
    } else if (answers.shape === 'Circle') {
        shape = new Circle(answers.text, answers.shapeColor, answers.textColor);
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle(answers.text, answers.shapeColor, answers.textColor);
    } else {
        // Handle an unknown or unsupported shape here
        console.log('Unsupported shape:', answers.shape);
        return;
    }
    
    console.log(shape);
    let logo;
    
    if (answers.shape === 'Square') {
        logo = shape.renderSquare();
    } else if (answers.shape === 'Circle') {
        logo = shape.renderCircle();
    } else if (answers.shape === 'Triangle') {
        logo = shape.renderTriangle();
    }
   
    console.log(logo);
    
    fs.writeFile('shape.svg', logo, (err) =>
        err ? console.log(err) : console.log('Successfully created shape.svg!')
    );
    
    return answers;

}

async function main() {
    const userInput = await getUserInput();
    const mySVGLogo = createSvgLogo(userInput);
    // console.log(mySVGLogo);
}

main();


module.exports = getUserInput;










