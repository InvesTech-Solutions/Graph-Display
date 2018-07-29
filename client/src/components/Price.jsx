import React, { Component } from 'react';

export default class Price extends Component {
	constructor(props){
		super(props);
		this.subtractPrices=this.subtractPrices.bind(this)
	}
	subtractPrices(firstPrice, secondPrice) {
		let dollarsFirst = parseFloat(firstPrice.slice(0, firstPrice.length - 3));
		let dollarsSecond = parseFloat(secondPrice.slice(0, secondPrice.length - 3));
		let totalCentsFirst = dollarsFirst * 100 + parseFloat(firstPrice.slice(firstPrice.length-2, firstPrice.length));
		let totalCentsSecond = dollarsSecond * 100 + parseFloat(secondPrice.slice(secondPrice.length-2, secondPrice.length));
		var total = (totalCentsFirst-totalCentsSecond)/100;
		if (total > 0) {
			return `+$${this.props.formatPrice(total)}`;
		} else {
			return `-$${this.props.formatPrice(total).substring(1)}`;
		}
	}
	render() {
		return (
			<div className='priceDisplay'>
				<h3>Facebook</h3>
				<h3>
					<span>${this.props.currentPrice}</span>
				</h3>
				<div className ='differences'>
					<h5 className = 'dollarsDiff'>{this.subtractPrices(this.props.currentPrice, this.props.closingPrice)}</h5>
					<h5 className = 'percentDiff'>
						({parseInt(this.props.currentPrice) > parseInt(this.props.closingPrice) ? '+' : null}
						{((this.props.currentPrice/this.props.closingPrice - 1)*100).toFixed(2)}%)
					</h5>
				</div>
			</div>
		)
	}
}