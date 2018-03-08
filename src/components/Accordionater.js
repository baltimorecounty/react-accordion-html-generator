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
		this.handleGenerateClodeClick = this.handleGenerateClodeClick.bind(this);
		this.handleAddPanelClick = this.handleAddPanelClick.bind(this);
		this.handleAccordionTitleChange = this.handleAccordionTitleChange.bind(this);
		this.handleHeadingTypeChange = this.handleHeadingTypeChange.bind(this);
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

	handleWizzyChange(title, value, index) {
		if (this.props.onWizzyChange) {
			this.props.onWizzyChange(title, value, index);
		}
	}

	handleGenerateClodeClick() {
		if (this.props.onGenerateCodeClick) {
			this.props.onGenerateCodeClick();
		}
	}

	handleAddPanelClick() {
		this.setState({ panelCount: this.state.panelCount + 1})
	}

	handleAccordionTitleChange(value) {
		if (this.props.onAccordionTitleChange) {
			this.props.onAccordionTitleChange(value);
		}
	}

	handleHeadingTypeChange(value) {
		if (this.props.onHeadingTypeChange) {
			this.props.onHeadingTypeChange(value);
		}
	}

	render() {
		const accordions = [];

		for (let x = 0; x < this.state.panelCount; x += 1) {
			accordions.push(<AccordionBuilder index={x} key={`panel${x}`} onWizzyChange={(title, value) => this.handleWizzyChange(title, value, x)} />);
		}

		return (
			<div className="accordion-builder-wrapper">
				<AccordionaterHeading 
					onAccordionTitleChange={this.handleAccordionTitleChange} 
					onHeadingTypeChange={this.handleHeadingTypeChange}
				/>
				<hr />
				{ accordions }
				<div className="row">
					<div className="col-md-12">
						<button className="btn btn-primary" onClick={this.handleAddPanelClick}>Add a panel</button> &nbsp;
						<button className="btn btn-danger" onClick={this.handleGenerateClodeClick}>Generate code</button>
					</div>
				</div>
			</div>
		);
	}
}

export { Accordionater };
