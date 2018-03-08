import React from 'react';
import renderer from 'react-test-renderer';

import { AccordionaterOutput } from '../../components'

test('renders without crashing', () => {
	const component = renderer.create(<AccordionaterOutput />);
	
	expect(component).toBeTruthy();
});