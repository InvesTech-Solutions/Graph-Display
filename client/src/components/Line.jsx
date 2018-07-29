import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if(this.props.show) {
			return(
				<g>
					<line className="lineScroller" x1={this.props.closest.x} x2={this.props.closest.x} y1={5} y2={260}></line>
					<circle className='myCircle'r={4} stroke={'white'} strokeWidth={2} cx={this.props.closest.x} cy={this.props.closest.y}></circle>
				</g>
			);
		} else {
			return null;
		}
	}
}

export default Line;