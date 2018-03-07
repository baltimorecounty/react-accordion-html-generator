import React, { Component } from 'react';
import pretty from 'pretty';

class AccordionaterOutput extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="well">
						<div className="form-group">
							<h4>Generated code</h4>
							<pre>
								<code>{pretty(this.props.value)}</code>
							</pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export { AccordionaterOutput };
