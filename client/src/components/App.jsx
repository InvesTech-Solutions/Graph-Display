import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Graph from './Graph.jsx'
import Line from './Line.jsx'

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		graphData: [],
  		path: '',
      line: false,
      closest: {x: null, y: null, date: null},
      date: 'April 6th, 2018'
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

  onMouseMove(e) {
    var closest = {x: null, y: null, date: null}
    this.setState({x: e.screenX}, () => {
      this.setState({closest:closest}, () => {
          document.getElementById('date').style.left = this.state.closest.x - 49 + 'px'
        })
    })
    this.state.graphData.map((coords) => {
      if (!closest.x && !closest.y) {
        closest.x = coords.x;
        closest.y = coords.y;
        closest.date = coords.date;
      } else {
        if (0<=e.screenX - closest.x<e.screenX-coords.x){
          closest.x = coords.x;
          closest.y = coords.y;
          closest.date = coords.date;
        }
      }
    });
  }

  componentDidMount(){
  	var tempArr =[]
  	var x = 0;
    var d = 1;
  	for (var i = 0; i < 30; i++) {
  		var y = Math.random() * 200 + 40;
  		tempArr.push({x:x, y:y, date: `April ${d}th, 2016`});
  		x = x + 20;
      d++
  	}
  	this.setState({
  		graphData: tempArr
  	})
    setTimeout(this.createPath, 100)
  }


  render() {
    return (
      <div>
        <div id='date'>{this.state.closest.date}</div>
        <svg onMouseMove = {this.onMouseMove.bind(this)} onMouseEnter = { () => this.setState({ line: true })} onMouseLeave= { () => this.setState({ line: false })} width={699} height={260} className='graphSVG'>
     	      <Graph class='mainGraph' data = {this.state.graphData} path={this.state.path}/>
            <Line closest={this.state.closest} show={this.state.line} />
        </svg>
      </div>
    );
  }
}

export default App;
