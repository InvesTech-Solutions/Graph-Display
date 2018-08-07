import React, { Component } from 'react';
import styles from '../../dist/style.css';

class Graph extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<g>	
        		<path width={699} height={270} className={styles.graphPath} d={this.props.path}></path>
			</g>	
    );
	}
}
export default Graph;