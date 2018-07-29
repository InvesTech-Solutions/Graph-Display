import React from 'react';
import App from './App.jsx';
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
})

