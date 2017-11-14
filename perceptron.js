class Perceptron {
  constructor() {
    this.weights = new Array(2);
    this.learning_rate = 0.05;
    // Initialize random weights
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.random() * (1 - (-1)) + (-1);
    }
  }

  guess(inputs) {
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }

  train(inputs, target) {
    let guess = this.guess(inputs)
    let error = target - guess;
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.learning_rate;
    }
  }

  activation(sum) {
    return sum >= 0 ? 1 : -1;
  }

}

export default Perceptron
