import React from 'react';
import App from './App.jsx';
import { shallow } from 'enzyme';

describe('App component', () => {

	it( 'Should create an svg graph with number of points equal to the data passed in', () => {
		const wrapper = shallow(<App />)
		const graphData = wrapper.state().graphData
		expect(graphData.length).toEqual(30)
	})
})

