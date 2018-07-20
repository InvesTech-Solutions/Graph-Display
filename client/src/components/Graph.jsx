import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './Line.jsx'

class Graph extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			line: false,
			x: 0,
			closest: {x:null, y:null}
		}
	}
	onMouseMove(e) {
    	this.setState({mouseX: e.screenX});
    	var closest = {x: null, y:null}
    	this.props.data.map((coords) => {
    		if (!closest.x && !closest.y) {
    			closest.x = coords.x;
    			closest.y = coords.y;
    		} else {
    			if (0<=e.screenX - closest.x<e.screenX-coords.x){
    				closest.x = coords.x;
    				closest.y = coords.y;
    			}
    		}
    	});
    	this.setState({closest: closest})
  	}
	render(){
		return(
			<div onMouseMove={this.onMouseMove.bind(this)} onMouseEnter={(e) => this.setState({ line: true })} onMouseLeave={(e) => this.setState({ line: false })}>
				<svg  width={699} height={300} className='graphSVG'>
		      		<g>
		      			<Line closest={this.state.closest} show={this.state.line}/>
		      			<path width={699} height={300} className='graphPath' d={this.props.path}>
		      			</path>
		      		</g>
		      	</svg>
			</div>
			);
	}
}
export default Graph;