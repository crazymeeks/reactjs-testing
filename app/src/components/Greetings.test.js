import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greetings';

test('renders Submitted Report when page is loaded', () => {
    // Arrange
    render(<Greeting/>);

    // Assert
    const elem = screen.getByText(/Submitted Reports/i);

    expect(elem).toBeInTheDocument();
});


test('renders Valid Report when button is clicked', () => {
   
    render(<Greeting/>);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const elem = screen.getByText(/Valid Reports/i);
    expect(elem).toBeInTheDocument();

});