import { render, screen } from '@testing-library/react';

import Output from './Output';



test('render submitted reports', () => {

    render(<Output report_tab={'submitted_report'}/>);

    const elem = screen.getByText(/submitted reports/i);

    expect(elem).toBeInTheDocument();

});


// test('renders valid reports', () => {
//     render(<Output report_tab={'valid_report'}/>);

//     const elem = screen.getByText(/valid reports/i);

//     expect(elem).toBeInTheDocument();
// });