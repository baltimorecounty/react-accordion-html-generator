import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

class Wizzy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: RichTextEditor.createEmptyValue(),
		};

		this.onRichTextEditorChange = this.onRichTextEditorChange.bind(this);
	}

	onRichTextEditorChange(value) {
		this.setState({ value });
		if (this.props.onChange) {
			this.props.onChange(value.toString('html'));
		}
	}

	render() {
		return (
			<RichTextEditor 
				value={this.state.value} 
				onChange={this.onRichTextEditorChange} 
				className="rich-text-editor"
			/>
		);
	}
}

export { Wizzy };
