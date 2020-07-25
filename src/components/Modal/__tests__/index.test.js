import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

// mock function replacing toggleModal function 
const mockToggleModal = jest.fn();

afterEach(cleanup)

describe('Modal component', () => {
it('renders', () => {
    // baseline render component test
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>)
})
it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}/>)
    expect(asFragment()).toMatchSnapshot()
})
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
      // render modal
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      // click event
      fireEvent.click(getByText('Close this modal'));
      // expected matcher
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  