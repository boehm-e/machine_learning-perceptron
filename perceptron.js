class Perceptron {
  constructor() {
    this.weights = new Array(2);
    this.learning_rate = 0.05;
    // Initialize random weights
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.random() * (1 - (-1)) + (-1);
    }
  }

  // we try to guess if, according to the inputs (here, x and y of a point) is over or bellow f(x) = x
  // in order to do that, we sum the weights from each inputs and we give the result to our activation function.
  guess(inputs) {
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }

  // we adapt the weights according to the following rule:
  // weight[n] = (real_label - predicted_label) * input[n] * learning_rate
  // This is a gradient descent
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
