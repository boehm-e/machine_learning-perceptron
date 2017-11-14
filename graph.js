const { createCanvas, loadImage } = require('canvas')

class Graph {

  constructor(width, height) {
    this.WIDTH = width;
    this.HEIGHT = height;
    this.canvas = createCanvas(this.WIDTH, this.HEIGHT)
    this.ctx = this.canvas.getContext('2d');
    this.init()
  }

  makePoint(point, color="black") {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawPredictionLine(weights, opacity) {
    // x = n : weights[0] * n + weights[1] * n
    const y0 = weights[0] * 0 + weights[1] * 0
    const y200 = weights[0] * 200 + weights[1] * 200

    var x1 = 0;
    var y1 = ( -weights[0] * x1) / weights[1];
    var x2 = this.WIDTH;
    var y2 = ( -weights[0] * x2) / weights[1];



    this.ctx.beginPath()
    this.ctx.lineTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.strokeStyle = opacity == 1 ? `rgba(0,255,0, ${opacity})` : `rgba(255, 0,0, ${opacity})`;
    this.ctx.closePath()
    this.ctx.stroke();
  }

  init() {
    this.ctx.translate(0, this.WIDTH);
    this.ctx.scale(1, -1);

    this.ctx.fillStyle="#FFFFFF";
    this.ctx.fillRect(0,0,this.WIDTH,this.HEIGHT);
    this.ctx.stroke();

    this.ctx.beginPath()
    this.ctx.lineTo(0, 0)
    this.ctx.lineTo(this.WIDTH, this.HEIGHT)
    this.ctx.stroke();
  }

  show() {
    var fs = require('fs')
    , out = fs.createWriteStream('./out.png')
    , stream = this.canvas.pngStream();
    stream.on('data', function(chunk){
      out.write(chunk);
    });

    stream.on('end', function(){
      var exec = require('child_process').exec;
      exec("eog out.png");
    });
  }

}

export default Graph
