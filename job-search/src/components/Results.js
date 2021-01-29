import React from 'react';
import JobItem from './JobItem';

const Results = ({ results }) => {
    return (
        <div className = "search-results">
            {results.map(( job, index) => (
                <JobItem key = {job.id} {...job} index={index} />
            ))}
        </div>
    )
}

export default Results

// This component loops through each job object from the results array and passes the individual job data to display in the JobItem component