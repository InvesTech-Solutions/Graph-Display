import React, { Component } from 'react';

class Graph extends Component {
	constructor(props){
		super(props);
		this.state = {
			line: false,
			x: 0,
			closest: {x:null, y:null}
		}
	}
	render(){
		return(
			<g>	
        <path width={699} height={270} className='graphPath' d={this.props.path}></path>
			</g>	
    );
	}
}
export default Graph;