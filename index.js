const inquirer = require('inquirer');
const fs = require('fs');


function createSvgLogo(userInput) {
    return `<svg width="100" height="100">
    <rect width="100" height="100" fill="${userInput.shapeColor}" />
    <text x="10" y="50" fill="${userInput.textColor}">${userInput.text}</text>
</svg>`;
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
     return answers;


}



async function main() {
    const userInput = await getUserInput();
    const mySVGLogo = createSvgLogo(userInput);
    console.log(mySVGLogo);
}

main();













