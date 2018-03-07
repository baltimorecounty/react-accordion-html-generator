import React, { Component } from 'react';
import { Wizzy } from './index';

class AccordionBuilder extends Component {
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
							<Wizzy />
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
