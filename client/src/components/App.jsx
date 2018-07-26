import React, { Component } from 'react';
import Graph from './Graph.jsx'
import Line from './Line.jsx'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      path: '',
      line: false,
      closest: {x: null, y: null, date: null},
      date: 'APR 6, 2018'
    }
    this.createPath = this.createPath.bind(this);
  }
  
  createPath(){
    let path = `M${this.state.graphData[0].x},${this.state.graphData[0].y}`;
    for (let i = 1; i < this.state.graphData.length; i++) {
      path+=`L${this.state.graphData[i].x},${this.state.graphData[i].y}`
    }
    this.setState({
      path: path
    })
  }
  test(){
    return 'hello';
  }

  onMouseMove(e) {
    const closest = {x: null, y: null, date: null}
    this.setState({x: e.clientX}, () => {
      this.setState({closest:closest}, () => {
        document.getElementById('date').style.left = this.state.closest.x - document.getElementById('date').offsetWidth/2 + 'px'
      })
    })
    this.state.graphData.map((coords) => {
      if (!closest.x && !closest.y) {
        closest.x = coords.x;
        closest.y = coords.y;
        closest.date = coords.date;
      } else {
        if (0<=e.clientX - closest.x<e.clientX-coords.x){
          closest.x = coords.x;
          closest.y = coords.y;
          closest.date = coords.date;
        }
      }
    });
  }

  componentDidMount(){
    const tempArr =[]
    let x = 0;
    $.get('http://127.0.0.1:3000/prices/', (results) => {
      results.forEach((datapoint) => {
        tempArr.push({x:x, y:datapoint.price, date:datapoint['DATE_FORMAT(price_date, "%b %e %Y")']})
        x += 20
      })
      this.setState({graphData: tempArr}, () => {
        this.createPath();
      })
    })

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
