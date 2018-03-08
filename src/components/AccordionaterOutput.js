import React, { Component } from 'react';
import pretty from 'pretty';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class AccordionaterOutput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCopied: false
		};

		this.handleCopyClick = this.handleCopyClick.bind(this);
		this.renderCopiedNote = this.renderCopiedNote.bind(this);
	}

	handleCopyClick() {
		this.setState({ isCopied: true });
	}

	renderCopiedNote() {
		if (this.state.isCopied) {
			setTimeout(() => this.setState({ isCopied: false }), 2000);

			return (<strong>Copied!</strong>);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="well">
						<div className="form-group">
							<h4>Generated code
								<CopyToClipboard onCopy={this.handleCopyClick} text={pretty(this.props.value)}>
									<button className="btn btn-default generated-code-button">Copy to clipboard</button>
								</CopyToClipboard>
								{this.renderCopiedNote()}
							</h4>
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
