import React from 'react';
import axios from 'axios';



export // you can do this in action creator thunk in redux-toolkit
const callApi = async() => {

    const response = await axios.post('/test', {
        title: 'Report Title', // in reality, get this from user input
    });

    return response;
};

const SubmitReport = () => {



    const submitHandler = () => {
        
        callApi();
    };


    return (
        <>
            {/* form here, etc */}
            <input data-testid="submitButton" type="button" onClick={submitHandler} value="Submit Report"/>
        </>
    );
};


export default SubmitReport;