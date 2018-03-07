import React, { Component } from 'react';

class AccordionaterHeading extends Component {
	constructor(props) {
		super(props);

		this.state = {
			panelCount: 1,
		};

		this.handleAccordionTitleChange = this.handleAccordionTitleChange.bind(this);
	}

	handleAccordionTitleChange(changeEvent) {
		if (this.props.onAccordionTitleChange) {
			this.props.onAccordionTitleChange(changeEvent.target.value);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="well">
						<div className="form-group">
							<label htmlFor="accordion-title">Accordion title (used for IDs)</label>
							<input type="text" id="accordion-title" className="form-control" onChange={this.handleAccordionTitleChange} />
						</div>	
						<div className="form-group">
							<label htmlFor="headingType">Heading type</label>
							<select id="headingType" className="form-control" defaultValue="Heading level 4 (h4)">
								<option value="h1">Heading level 1 (h1)</option>
								<option value="h2">Heading level 2 (h2)</option>
								<option value="h3">Heading level 3 (h3)</option>
								<option value="h4">Heading level 4 (h4)</option>
							</select>
						</div>					
					</div>
				</div>
			</div>
		);
	}
}

export { AccordionaterHeading };
