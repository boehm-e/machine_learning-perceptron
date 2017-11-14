class Point {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.label = (this.x > this.y) ? 1 : -1
  }
}

export default Point
