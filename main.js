import Perceptron from './perceptron';
import Point from './point';
import Graph from './graph';

const WIDTH = 900;
const HEIGHT = 900;

const perceptron = new Perceptron()
const graph = new Graph(WIDTH, HEIGHT)

let training_points = [];
for (var i = 0; i < 100; i++) {
  training_points[i] = new Point(WIDTH, HEIGHT)
  // graph.makePoint(training_points[i])
}
// graph.show()


for (var i = 0; i < training_points.length; i++) {
  console.log("TRAINING WEIGHTS :", perceptron.weights);
  perceptron.train([training_points[i].x, training_points[i].y], training_points[i].label)
  graph.drawPredictionLine(perceptron.weights, i / training_points.length)
}
console.log("FINAL    WEIGHTS :", perceptron.weights);

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


// classify this function
// f(x) = x
