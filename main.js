import Perceptron from './perceptron';
import Point from './point';
import Graph from './graph';

const WIDTH = 900;
const HEIGHT = 900;

const perceptron = new Perceptron()
const graph = new Graph(WIDTH, HEIGHT)

// WE TRY TO CLASSIFY IF A POINT IS OVER OR BELLOW f(x) = x
// we create x points
// these points will be our training set, they have, x, y and a label
// the label is -1 or 1 whether f(x) >= x or f(x) < x
let training_points = [];
for (var i = 0; i < 100; i++) {
  training_points[i] = new Point(WIDTH, HEIGHT)
}


// For each points we tweak the weights of each inputs.
for (var i = 0; i < training_points.length; i++) {
  console.log("TRAINING WEIGHTS :", perceptron.weights);
  perceptron.train([training_points[i].x, training_points[i].y], training_points[i].label)
  graph.drawPredictionLine(perceptron.weights, i / training_points.length)
}
console.log("FINAL    WEIGHTS :", perceptron.weights);


// Once our perceptrons weights are trained, we can use it to test its accuracy.
// we use our training_points (we should have used new testing points, but whatever...) to check if its real value (training_points[i].label) is equal to the perceptron guess.
let falses = 0;
let trues = 0;
for (var i = 0; i < training_points.length; i++) {
  if(training_points[i].label == perceptron.guess([training_points[i].x, training_points[i].y])) {
    graph.makePoint(training_points[i], 'green')
    trues++;
  }
  else {
    graph.makePoint(training_points[i], 'red')
    falses++;
  }
}
graph.drawPredictionLine(perceptron.weights, 1)
graph.show()

const accuracy = trues / (trues +  falses) * 100;
console.log(`ACCURACY : ${accuracy} %`) ;
