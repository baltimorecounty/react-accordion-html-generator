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
			isWizzy: true,
		};

		this.onRichTextEditorChange = this.onRichTextEditorChange.bind(this);
		this.renderSwitchButton = this.renderSwitchButton.bind(this);
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
					<button className="wizzy-switch btn btn-default" onClick={() => this.setState({ isWizzy: !this.state.isWizzy })}>Switch to HTML Editor</button>
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
				<button className="wizzy-switch btn btn-default" onClick={() => this.setState({ isWizzy: !this.state.isWizzy })}>Switch to WYSIWYG Editor</button>
				<span class="danger">Switching back to the WYSIWYG view and making changes will overwrite your pasted HTML. Be careful!</span>
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
