import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
// import { act } from '@testing-library/react-hooks';
import axios from "axios";

import SubmitReport, { callApi } from "./SubmitReport";

let url = ''
let body = {}


const mockAxios = () => {
    jest.mock('axios', () => ({
        ...jest.requireActual('axios'),
        post: jest.fn(),
    }));
};


describe('SubmitReport Component', () => {

    mockAxios();

    test('submit vapt report when button click', async () => {

        render(<SubmitReport/>);
        
        const submitButton = screen.getByTestId('submitButton');

        const mockResponse = {
            data: {
                report_uuid: 'uuid',
            },
            status: 200,
        };

        axios.post.mockImplementationOnce(() => Promise.resolve(mockResponse));

        axios.post.mockResolvedValue(mockResponse);
        const response = await callApi();
        
        expect(response).toEqual(mockResponse);
        expect(axios.post).toHaveBeenCalledWith("/test", {title: 'Report Title'});

    });

});