import * as d3 from 'd3';
import _ from 'lodash';

import './style/style.scss';

import Simulation from './metaballs/simulation';

// const width = +svg.attr('width') - margin.left - margin.right;
// const height = +svg.attr('height') - margin.top - margin.bottom;

const width = 700;
const height = 500;


const newCanvas = function() {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  return canvas;
};

const simulation = new Simulation({
  canvas: newCanvas(),
  cellSize: 40,
  numCircles: 10,
  draw() {
    this.drawBg();
    this.drawCircles();
  }
});

simulation.draw();
simulation.clone({
  canvas: newCanvas(),
  draw() {
    this.drawBg();
    this.drawThresholdedCorners();
    this.drawGridLines();
    this.drawCellClassification();
    this.draw45DegContours();
  }
}).draw();

simulation.clone({
  canvas: newCanvas(),
  cellSize: 5,
  draw() {
    this.drawBg();
    this.draw45DegContours();
  }
}).draw();

simulation.clone({
  canvas: newCanvas(),
  draw() {
    this.drawBg();
    this.drawGridLines();
    this.drawSmoothContours();
  }
}).draw();

simulation.clone({
  canvas: newCanvas(),
  cellSize: 5,
  draw() {
    this.drawBg();
    this.drawSmoothContours();
  }
}).draw();

console.log('yea');
