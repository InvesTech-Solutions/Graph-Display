import React, { Component } from 'react';
import styles from '../../dist/style.css';

export default class Price extends Component {
	constructor(props) {
		super(props);
		this.subtractPrices = this.subtractPrices.bind(this)
	}

	//subtracts two dollar-cents strings and returns a result with a relevant plus or minus and dollar sign
		// "11.00" "20.00"
	subtractPrices(firstPrice, secondPrice) {
		if (firstPrice === secondPrice) {
			return '+$0.00';
		}
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
			<div className = {styles.priceDisplay}>
				<h3>{this.props.name}</h3>
					<span id={styles.currentPrice}>${this.props.currentPrice}</span>
				<div className = {styles.differences}>
					<h5 className = {styles.dollarsDiff}>{this.subtractPrices(this.props.currentPrice, this.props.closingPrice)}</h5>
					<h5 className = {styles.percentDiff}>
						({parseInt(this.props.currentPrice) > parseInt(this.props.closingPrice) ? '+' : null}
						{((this.props.currentPrice/this.props.closingPrice - 1)*100).toFixed(2)}%)
					</h5>
				</div>
			</div>
		)
	}
}