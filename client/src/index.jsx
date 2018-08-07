import React, { Component } from 'react';
import reactDOM from 'react-dom';

import MainGraph from './components/App.jsx';

//reactDOM.render(<MainGraph />, document.querySelector('#maingraph'));

window.MainGraph = MainGraph;
export default MainGraph;