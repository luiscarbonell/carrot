const Connection = require("./connection");

function Neuron() {
  let self = this;
  
  self.connections = {
    incoming: [],
    outgoing: [],
    self: []
  }
  
  self.outputs = []
  
  self.connect = function(neuron, weight) {
    
  }
  
  self.activate = function(input) {
    
  }
}

module.exports = Neuron;