import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/solarized_light';

class Wizzy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			wizzyValue: RichTextEditor.createEmptyValue(),
			html: '',
			isWizzy: false,
		};

		this.onRichTextEditorChange = this.onRichTextEditorChange.bind(this);
		this.renderSwitchButton = this.renderSwitchButton.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
	}

	handleSwitch() {
		this.setState({ isWizzy: !this.state.isWizzy })
	}

	onRichTextEditorChange(value) {
		if (typeof value === 'string') {
			this.setState({ 
				wizzyValue: RichTextEditor.createValueFromString(value, 'html'),
				html: value, 
			});
		} else {
			this.setState({ 
				wizzyValue: value,
				html: value.toString('html'),
			});
		}

		if (this.props.onChange) {
			this.props.onChange(this.state.html);
		}
	}

	renderSwitchButton() {
		if (this.state.isWizzy) {
			return (
				<div>
					<div className="wizzy-switch-wrapper">
						<button className="wizzy-switch btn btn-default" onClick={this.handleSwitch}>Switch to HTML Editor</button>
					</div>
					<RichTextEditor 
						value={this.state.wizzyValue} 
						onChange={this.onRichTextEditorChange} 
						className="rich-text-editor"
					/>
				</div>
			);
		}

		return (
			<div>
				<div className="wizzy-switch-wrapper">
					<button className="wizzy-switch btn btn-default" onClick={this.handleSwitch}>Switch to WYSIWYG Editor</button>
					<span className="wizzy-switch-danger">Switching back to the WYSIWYG view and making changes will overwrite your HTML. Be careful!</span>
				</div>
				<AceEditor
					mode="html"
					theme="solarized_light"
					name="ace-editor-wizzy-replacement"
					onChange={this.onRichTextEditorChange}
					height="200px"
					width="100%"
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					value={this.state.html}
					setOptions={{
						enableBasicAutocompletion: false,
						enableLiveAutocompletion: false,
						enableSnippets: false,
						showLineNumbers: true,
						tabSize: 2,
					}}/>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderSwitchButton()}				
			</div>
		);
	}
}

export { Wizzy };
