import React, { Component } from 'react';
import { Wizzy } from './index';

class AccordionBuilder extends Component {
	constructor(props) {
		super(props);

		this.handleWizzyChange = this.handleWizzyChange.bind(this);
	}

	handleWizzyChange(value) {
		if (this.props.handleWizzyChange) {
			this.props.handleWizzyChange(value);
		}
	}

	render() {
		return (
			<div className="accordion-builder">
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<label htmlFor={`accordion-builder-title-${this.props.index}`}>Panel Title</label>
							<input id={`accordion-builder-title-${this.props.index}`} type="text" className="form-control"/>
						</div>
						<div className="form-group">
							<label htmlFor={`accordion-builder-content-${this.props.index}`}>Panel Body</label>
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
