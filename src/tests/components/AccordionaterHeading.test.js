import React from 'react';
import renderer from 'react-test-renderer';

import { AccordionaterHeading } from '../../components'

test('renders without crashing', () => {
	const component = renderer.create(<AccordionaterHeading />);
	
	expect(component).toBeTruthy();
});