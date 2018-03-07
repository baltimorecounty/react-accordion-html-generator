import React, { Component } from 'react';
import { AccordionBuilder, AccordionaterHeading } from './index';

class Accordionater extends Component {
	constructor(props) {
		super(props);

		this.state = {
			panelCount: 1,
		};

		this.generateAccordionBuilders = this.generateAccordionBuilders.bind(this);
		this.handleWizzyChange = this.handleWizzyChange.bind(this);
	}

	generateAccordionBuilders() {
		let accordions;

		for (let x = 0; x < this.state.panelCount; x += 1) {
			accordions = accordions + (
				<AccordionBuilder key={`panel${x}`} />
			);
		}

		return accordions;
	}

	handleWizzyChange(value) {
		if (this.props.handleWizzyChange) {
			this.props.handleWizzyChange(value);
		}
	}

	render() {
		const accordions = [];

		for (let x = 0; x < this.state.panelCount; x += 1) {
			accordions.push(<AccordionBuilder index={x} key={`panel${x}`} />);
		}

		return (
			<div className="accordion-builder-wrapper">
				<AccordionaterHeading />
				{ accordions }
				<div className="row">
					<div className="col-md-12">
						<button className="btn btn-primary" onClick={() => this.setState({ panelCount: this.state.panelCount + 1})}>Add a panel</button> &nbsp;
						<button className="btn btn-danger">Generate code</button>
					</div>
				</div>
			</div>
		);
	}
}

export { Accordionater };
