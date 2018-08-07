import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../dist/style.css';

class Line extends Component {
	constructor(props){
		super(props);
	}
	render() {
		//checks to see if the mouse is currently inside the svg element
		if(this.props.show) {
			return(
				<g>
					<line className={styles.lineScroller} x1={this.props.closest.x} x2={this.props.closest.x} y1={5} y2={260}></line>
					<circle className={styles.myCircle} r={5} stroke={'white'} strokeWidth={2} cx={this.props.closest.x} cy={this.props.closest.y}></circle>
				</g>
			);
		} else {
			return null;
		}
	}
}

export default Line;