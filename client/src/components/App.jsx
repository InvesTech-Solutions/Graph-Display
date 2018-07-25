import React, { Component } from 'react';
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
    this.setState({x: e.screenX}, () => {
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
        if (0<=e.screenX - closest.x<e.screenX-coords.x){
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
    let d = 1;

    //simple fake data generator -- will be replaced with a db retrieval in next pr
    for (let i = 0; i < 30; i++) {
      let y = Math.random() * 200 + 40;
      tempArr.push({x:x, y:y, date: `APR ${d}, 2016`});
      x = x + 20;
      d++;
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
