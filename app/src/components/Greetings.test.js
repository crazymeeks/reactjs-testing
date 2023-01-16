import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greeting from "./Greetings";


describe('Greeting Component', () => {
    test('renders Hello World as a text', () => {
        render(<Greeting/>);
    
        const elem = screen.getByText(/hello world!/i);
    
        expect(elem).toBeInTheDocument();
    });
    
    test('render change text when button is not clicked', () => {
        render(<Greeting/>);
        const elem = screen.getByText(/good to see you/i);
        expect(elem).toBeInTheDocument();

    });

    test('render change text when button is clicked', () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const elem = screen.getByText(/changed/i);
        expect(elem).toBeInTheDocument();

    });

});