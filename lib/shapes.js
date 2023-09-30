class Square {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  renderSquare() {
    return `<svg width="100" height="100">
    <rect width="100" height="100" fill="${this.shapeColor}" />
    <text x="10" y="50" fill="${this.textColor}">${this.text}</text>
</svg>`;
  }
}

class Circle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  renderCircle() {
    return `<svg width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
        <text x="10" y="50" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Triangle {
  constructor(text, shapeColor, textColor) {
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  renderTriangle() {
    return `<svg width="100" height="100">
        <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}" />
        <text x="10" y="50" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}


module.exports = {
    Square,
    Circle,
    Triangle,
};

