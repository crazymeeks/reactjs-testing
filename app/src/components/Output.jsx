const Output = props => {

    const reports = {
        submitted_report: SubmittedReports,
        valid_report: ValidReports,
    };

    const reportTab = props.report_tab;

    const Component = reports[reportTab];

    return (
        <Component/>
    );
};

// SubmittedReportsComponent
// ValidReportsComponent

const SubmittedReports = () => {
    return (
        <p>Submitted Reports</p>
    );
};

const ValidReports = () => {
    return (
        <p>Valid Reports</p>
    );
};

export default Output;