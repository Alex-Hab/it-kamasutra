/*import { render, screen } from '@testing-library/react';*/
/*import App from './App';*/
/*import React from 'react';*/
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

it('render without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SamuraiJSApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});

/*test('render without crashing', () => {
	render(<SamuraiJSApp />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});*/

