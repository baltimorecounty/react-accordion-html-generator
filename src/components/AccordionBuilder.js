import React, { Component } from 'react';
import { Wizzy } from './index';

class AccordionBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		}

		this.handleWizzyChange = this.handleWizzyChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	handleTitleChange(changeEvent) {
		this.setState({ title: changeEvent.target.value });
	}

	handleWizzyChange(value) {
		if (this.props.onWizzyChange) {
			this.props.onWizzyChange(this.state.title, value);
		}
	}

	render() {
		return (
			<div className="accordion-builder">
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label htmlFor={`accordion-builder-title-${this.props.index}`}>{`Panel ${this.props.index + 1} Title`}</label>
							<input id={`accordion-builder-title-${this.props.index}`} type="text" className="form-control" onChange={this.handleTitleChange} />
						</div>
						<div className="form-group">
							<label htmlFor={`accordion-builder-content-${this.props.index}`}>{`Panel ${this.props.index + 1} Body`}</label>
							<Wizzy onChange={this.handleWizzyChange} />
							{ /* <textarea id={`accordion-builder-content-${this.props.index}`} className="form-control" rows="5"></textarea> */ }
						</div>	
						<hr/>					
					</div>
				</div>
			</div>
		);
	}
}

export { AccordionBuilder };
