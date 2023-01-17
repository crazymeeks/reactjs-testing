import {useState} from 'react';
import Output from './Output';


const Greeting = () => {

    
    const [reportType, setReportType] = useState('submitted_report');

    const changeReportHandler = () => {
        setReportType('valid_report');
    }

    return (
        <div>
            <Output report_tab={reportType}/>
            <button onClick={changeReportHandler}>Change Report!</button>
        </div>
    );
};

export default Greeting;