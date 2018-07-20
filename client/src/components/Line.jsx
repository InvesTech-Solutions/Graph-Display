import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		if(this.props.show) {
		return(
		<g>
		<circle r={5} fill={'green'} stroke={'white'} stroke-width={1} cx={this.props.closest.x} cy={this.props.closest.y}></circle>
		<line className="lineScroller" x1={this.props.closest.x} x2={this.props.closest.x} y1={0} y2={300}></line>
		</g>
		);
	} else {
		return null;
	}
	}
}

export default Line;