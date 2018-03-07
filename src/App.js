import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="accordionater">
				<h1>Accordionater</h1>
				<p>Welcome to Accordionater, the bootstrap accordion generator for the Baltimore County sites.</p>
				<accordionBuilder />
			</div>
		);
	}
}

export default App;
