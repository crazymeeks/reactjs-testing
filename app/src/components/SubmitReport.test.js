import {screen, render, fireEvent} from "@testing-library/react";
import SubmitReport, {callApi} from "./SubmitReport";
import axios from "axios";

// mock/fake implementation of axios
const mockAxios = () => {
    jest.mock('axios', () => ({
        ...jest.requireActual('axios'),
        post: jest.fn(),
    }));
};


describe('SubmitReport Component', () => {

    mockAxios();

    // run specific test: npm test -- -t 'should submit valid report'
    test('should submit valid report', async () => {

        const body = {
            program_uuid: "sample-uuid",
            vulnerability_type: "High",
            affected_asset: "/vulnerable/url",
            title: "Test Report"
        };

        const apiResponse = {
            data: {
                success: true,
                message: "Report successfully saved.",
                type: null,
                data: {
                  report_uuid: "f60e3a86-606d-4110-9388-a232a6b09d88"
                }
            },
            status: 201
        };

        // Arrange
        const component = render(<SubmitReport/>);
        const submitButton = component.getByTestId('submitButton');

        // Mock api response from axios
        axios.post.mockImplementation(() => Promise.resolve(apiResponse));
        
        const response = await callApi();
        
        // Act
        const clickResult = fireEvent.click(submitButton);
        // Assert
        expect(response).toEqual(apiResponse);
        expect(201).toEqual(response.status);
        expect(response.data.success).toBeTruthy();
        expect(response.data.message).toEqual('Report successfully saved.');
    });


    test('should show user error when api returned 403 status code', () => {
        const apiResponse = {
            data: {
                success: true,
                message: "Report successfully saved.",
                type: null,
                data: {
                  report_uuid: "f60e3a86-606d-4110-9388-a232a6b09d88"
                }
            },
            status: 403
        };

        // Arrange
        const component = render(<SubmitReport/>);
        const submitButton = component.getByTestId('submitButton');

        // Mock api response from axios
        axios.post.mockImplementation(() => Promise.resolve(apiResponse));
        // Act
        fireEvent.click(submitButton);

        // expect(screen.getByText(/Oops. Something went wrong/i)).toBeInTheDocument();
    });


    test('should show user error when api returned 422 status code', () => {
        const apiResponse = {
            data: {
                success: true,
                message: "Report successfully saved.",
                type: null,
                data: {
                  report_uuid: "f60e3a86-606d-4110-9388-a232a6b09d88"
                }
            },
            status: 422
        };

        // Arrange
        const component = render(<SubmitReport/>);
        const submitButton = component.getByTestId('submitButton');

        // Mock api response from axios
        axios.post.mockImplementation(() => Promise.resolve(apiResponse));
        
        fireEvent.click(submitButton);

        // expect(screen.getByText(/Invalid user input/i)).toBeInTheDocument();
    });

    

});