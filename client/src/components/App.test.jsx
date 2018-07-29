import React from 'react';
import App from './App.jsx';
import Price from './Price.jsx';
import { shallow } from 'enzyme';

describe('App component', () => {

	it( 'Should start with an empty graph that will get coordinates from the database', () => {
		const wrapper = shallow(<App />)
		const graphData = wrapper.state().graphData
		expect(graphData.length).toEqual(0)
	})

	it('Should have a method that formats integers and decimals into price strings', () => {
		const wrapper = shallow(<App />)
		const formatted = wrapper.instance().formatPrice(432)
		expect(formatted).toEqual('432.00')
	})

	it('Should have a method that formats datapoints within the graph height', () => {
		const wrapper = shallow(<App />)
		const formatted = wrapper.instance().formatDataPoint(120, 70, 100)
		expect(formatted).toEqual(156)
	})

	it('Should be able to create a graph path, given datapoints', () => {
		const wrapper = shallow(<App />).instance()
		wrapper.setState({graphData: [{x:0, y:1}, {x:1, y:2}]}, wrapper.createPath);
		setTimeout(() => {
			expect(wrapper.state().path).toEqual('M0,1L1,2')
		}, 100)
	})
})

describe('Price component', () => {
	it('Should have a method that can subtract two price strings and use a props method to format them as a price difference', () => {
		const wrapper = shallow(<Price formatPrice={(int)=> {
		    var str = int.toString();
		    let index = str.indexOf('.');
		    if(index !== str.length - 3) {
		        if (index === -1) {
		          return `${str}.00`;
		        } else {
		          return `${str}0`;
		        }
		    }
		    return `${str}`;
  		}} />)
		const subtracted = wrapper.instance().subtractPrices('12.32', '1.21')
		expect(subtracted).toEqual('+$11.11')
	})
})
