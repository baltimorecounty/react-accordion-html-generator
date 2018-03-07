import React, { Component } from 'react';
import { Accordionater, AccordionaterOutput } from './components';
import AppCss from './App.css';

class App extends Component {
	render() {
		return (
			<div className="accordionater container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1>Accordionater</h1>
						<p>Welcome to Accordionater, the bootstrap accordion generator for the Baltimore County sites.</p>
					</div>
				</div>
				
				<Accordionater />
				<br/>
				<AccordionaterOutput />
			</div>
		);
	}
}

export default App;
