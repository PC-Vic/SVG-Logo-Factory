const inquirer = require('inquirer');
const fs = require('fs');


// function createSvgLogo(userInput) {
//     return `<svg width="100" height="100">
//     <rect width="100" height="100" fill="${userInput.shapeColor}" />
//     <text x="10" y="50" fill="${userInput.textColor}">${userInput.text}</text>
// </svg>`;
// }

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

class Square {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

 render() {
    return `<svg width="100" height="100">
    <rect width="100" height="100" fill="${this.shapeColor}" />
    <text x="10" y="50" fill="${this.textColor}">${this.text}</text>
</svg>`;
 }
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
 
     // You can access the user's choices using answers.shapeColor and answers.textColor, and they will be in hexadecimal format.
     console.log('User input:', answers);
     let shape;
     shape = new Square(answers.text, answers.shapeColor, answers.textColor)
     if(answers.choices !== Square) {
        
     }
     console.log(shape) // if statement, reassign shape
    const logo = shape.render();
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













