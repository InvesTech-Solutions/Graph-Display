import React from 'react';
import App from './App.jsx';
import { shallow } from 'enzyme';

describe('App component', () => {

	it( 'Should have an svg element', () => {
		const wrapper = shallow(<App />)
		const graphData = wrapper.state().graphData
		expect(graphData.length).toEqual(30)
	})
})

