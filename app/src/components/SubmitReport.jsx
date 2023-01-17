import React from "react";
import axios from "axios";

export const callApi = async () => {
    const response = await axios.post(`/api/v1/vapt/report`, {
        program_uuid: "sample-uuid", // from form input
        vulnerability_type: "High",
        affected_asset: "/vulnerable/url",
        title: "Test Report"
    });

    return response;
};

const SubmitReport = () => {

    // const [vulnerabilityType, setVulnerabilityType] = useState("");

    const submitHandler = () => {
        callApi().then(response => {
            if (inArray(response.status, [201, 200])) {
                // redirect or show error message to user
                console.log('Success');
            }
            
            if (!inArray(response.status, [403])) {
                // show error to user
                console.log("Oops. Something went wrong!.");
            }

            if (response.status == 422) {
                // show error to user
                console.log("Missing required field.");
            }
            
        });
    }

    return (

        // ... form here
        <input onClick={submitHandler} data-testid="submitButton" type="button" value="Submit Report"/>
    );
};


const inArray = (needle, haystack) => {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
};


export default SubmitReport;