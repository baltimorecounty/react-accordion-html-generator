import React, { Component } from 'react';

class AccordionaterHeading extends Component {
	constructor(props) {
		super(props);

		this.state = {
			panelCount: 1,
		};
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="well">
						<div className="form-group">
							<label htmlFor="accordion-title">Accordion title (used for IDs)</label>
							<input type="text" id="accordion-title" className="form-control" />
						</div>	
						<div className="form-group">
							<label htmlFor="headingType">Heading type</label>
							<select id="headingType" className="form-control">
								<option>Heading level 1 (h1)</option>
								<option>Heading level 2 (h2)</option>
								<option selected="selected">Heading level 3 (h3)</option>
								<option>Heading level 4 (h4)</option>
							</select>
						</div>					
					</div>
				</div>
			</div>
		);
	}
}

export { AccordionaterHeading };
