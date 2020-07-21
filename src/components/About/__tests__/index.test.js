import React from 'react';
/// react testing library
import { render, cleanup } from '@testing-library/react';
// extend-expect from jest-dom
import '@testing-library/jest-dom/extend-expect';
// import about component
import About from '..';


// call the clean up function
afterEach(cleanup);

// use the describe function to declare the component we're testing 
describe('About component', () => {
    // renders About test
    // first test - verifying that the component is rendering 
    it('renders', () => {
        render(<About />)
    });

    // second test - "test case" - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render about 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })


  })