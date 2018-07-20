import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph.jsx'
import Line from './Line.jsx'

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		graphData: [],
  		path: ''
  	}
  	this.createPath = this.createPath.bind(this);
  }
  
  createPath(){
  	var path = `M${this.state.graphData[0].x},${this.state.graphData[0].y}`;
  	for (var i = 1; i < this.state.graphData.length; i++) {
    	path+=`L${this.state.graphData[i].x},${this.state.graphData[i].y}`
  	}
  	this.setState({
  		path: path
  	})
  }

  componentDidMount(){
  	var tempArr =[]
  	var x = 0;
  	for (var i = 0; i < 30; i++) {
  		var y = Math.random() * 200 + 40;
  		tempArr.push({x:x, y:y});
  		x = x+20;
  	}
  	this.setState({
  		graphData: tempArr
  	})
  }


  render() {
    return (
      <div>
      	<button onClick={this.createPath}>Ken's Lazy Graph Test</button>
     	<Graph data = {this.state.graphData} path={this.state.path}/>
      </div>
    );
  }
}

export default App;
