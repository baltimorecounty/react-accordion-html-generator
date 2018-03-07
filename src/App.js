import React, { Component } from 'react';
import { Accordionater, AccordionaterOutput } from './components';
import AppCss from './App.css'; // eslint-disable-line

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accordionatorHtmlOutput: [],
			code: '',
			accordionTitleForIds: '',
			headingType: 'h4',
		};

		this.handleWizzyChange = this.handleWizzyChange.bind(this);
		this.handleGenerateCodeClick = this.handleGenerateCodeClick.bind(this);
		this.handleAccordionTitleChange = this.handleAccordionTitleChange.bind(this);
		this.handleHeadingTypeChange = this.handleHeadingTypeChange.bind(this);
	}

	handleAccordionTitleChange(accordionTitle) {
		this.setState({ accordionTitleForIds: this.cleanStringForId(accordionTitle) });
	}

	handleGenerateCodeClick() {
		let output = '';

		this.state.accordionatorHtmlOutput.map((outputObject, index) => {
			const panelTitle = this.cleanStringForId(outputObject.title);

			output = output +
			`<div class="panel">
				<${this.state.headingType} id="${panelTitle}-heading-${index}">
					<a aria-controls="${panelTitle}-panel-${index}" 
						aria-expanded="false" 
						class="collapsed flex flex-row" 
						data-parent="#${this.state.accordionTitleForIds}" 
						data-toggle="collapse"
						href="#${panelTitle}-panel-${index}" role="button">
						<i aria-hidden="true" class="fa fa-chevron-right">&nbsp;</i>
						<span class="flex">${outputObject.title}</span>
					</a>
				</${this.state.headingType}>
				<div aria-labelledby="${panelTitle}-heading-${index}" class="collapse content-accordion-body" id="${panelTitle}-panel-${index}" role="tabpanel">
					<div class="wrapper">
						${outputObject.body}
					</div>
				</div>
			</div>
			`;

			return output;
		});

		const code = 
		`<!-- BEGIN ${this.state.accordionTitleForIds} ACCORDION -->
		<div aria-multiselectable="true" class="content-accordion" id="${this.state.accordionTitleForIds}" role="tablist">${output}</div>
		<!-- END ${this.state.accordionTitleForIds} ACCORDION -->`;

		this.setState({ code });
	}

	handleHeadingTypeChange(headingType) {
		this.setState({ headingType });
	}

	handleWizzyChange(title, body, index) {
		const outputArrayCopy = this.state.accordionatorHtmlOutput.slice();

		if (!outputArrayCopy[index]) {
			while (index < outputArrayCopy.length) {
				outputArrayCopy.push('');
			}
		}

		outputArrayCopy[index] = { 
			title: title || '',  
			body: body || ''
		};
		
		this.setState({ accordionatorHtmlOutput: outputArrayCopy});
	}

	cleanStringForId(value) {
		const justNumbersAndLettersRegex = /\w+/g;
		const matches = [];
		let match;

		while ((match = justNumbersAndLettersRegex.exec(value)) !== null) {
			matches.push(match[0]);
		}

		return matches.join('');
	}

	render() {
		return (
			<div className="accordionater container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1>Accordionater</h1>
						<p>Welcome to Accordionater, the bootstrap accordion generator for the Baltimore County sites.</p>
					</div>
				</div>
				
				<Accordionater 
					onWizzyChange={this.handleWizzyChange} 
					onGenerateCodeClick={this.handleGenerateCodeClick} 
					onAccordionTitleChange={this.handleAccordionTitleChange} 
					onHeadingTypeChange={this.handleHeadingTypeChange}
				/>
				<br/>
				<AccordionaterOutput value={this.state.code} />
			</div>
		);
	}
}

export default App;
