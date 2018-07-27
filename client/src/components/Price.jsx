import React, { Component } from 'react';

export default class Price extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className='priceDisplay'>
				<h3>Facebook</h3>
				<h3>
					<span>$</span>
				</h3>
				<div className ='differences'>
					<h5 className = 'dollarsDiff'>-$10.43</h5>
					<h5 className = 'percentDiff'>-9.63%</h5>
				</div>
			</div>
			)
	}
}