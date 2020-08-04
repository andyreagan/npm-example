import * as d3 from 'd3'

export var printMsg = function() {
  console.log("This is a message from the demo package");
}

export var functionThatDependsOnD3 = function() {
  console.log(d3.version);
}