import React, { Component } from 'react';

class AccordionaterOutput extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="well">
						<div className="form-group">
							<label htmlFor="code-block">Generated code</label>
							<textarea id="code-block" rows="5" className="form-control" readonly="readonly" value={this.props.value}></textarea>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export { AccordionaterOutput };
