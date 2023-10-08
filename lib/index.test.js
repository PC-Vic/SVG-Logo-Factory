
const { Square, Circle, Triangle } = require('./shapes'); 
const fs = require('fs');
const inquirer = require('inquirer');


describe('Shapes Test', () => {
    it('should create a square', () => {
const square = new Square('Tes', 'Red', 'Green');
const SVG =square.renderSquare();
const expectedResult = `<svg width="100" height="100">
<rect width="100" height="100" fill="Red" />
<text x="10" y="50" fill="Green">Tes</text>
</svg>`

expect(SVG).toEqual(expectedResult);

    })
} )

describe('Shapes Test', () => {
    it('should create a circle', () => {
const circle = new Circle('Tes', 'Red', 'Green');
const SVG = circle.renderCircle();
const expectedResult = `<svg width="100" height="100">
<circle cx="50" cy="50" r="40" fill="Red" />
<text x="10" y="50" fill="Green">Tes</text>
</svg>`

expect(SVG).toEqual(expectedResult);

    })
} )

describe('Shapes Test', () => {
    it('should create a triangle', () => {
const triangle = new Triangle('Tes', 'Red', 'Green');
const SVG = triangle.renderTriangle();
const expectedResult = `<svg width="100" height="100">
<polygon points="50,10 90,90 10,90" fill="Red" />
<text x="10" y="50" fill="Green">Tes</text>
</svg>`

expect(SVG).toEqual(expectedResult);

    })
} )







