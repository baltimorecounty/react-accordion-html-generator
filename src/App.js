import React, { Component } from 'react';
import { Accordionater } from './components';
import AppCss from './App.css';

class App extends Component {
	render() {
		return (
			<div className="accordionater container-fluid">
				<h1>Accordionater</h1>
				<p>Welcome to Accordionater, the bootstrap accordion generator for the Baltimore County sites.</p>
				<Accordionater />
			</div>
		);
	}
}

export default App;
