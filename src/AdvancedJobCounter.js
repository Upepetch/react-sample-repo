import React, { useState } from 'react';

const AdvancedJobCounter = () => {
        const [jobCount, setJobCount] = useState(0);
        const [environment, setEnvironment] = useState('production');

        const handleAddJob = () => {
            setJobCount(prev => prev + 1);
        };

        const handleRemoveJob = () => {
             setJobCount(prev => Math.max(prev - 1, 0)); //This ensures the job count never drops below zero
        };

        const handleResetJob = () => {
            if (jobCount !== 0) // Prevent removing jobs when count is zero
            setJobCount(0);
        };

        const toggleEnvironment = () => {
            setEnvironment(prev => (prev === 'Production' ? 'UAT' : 'Production'));
        }

        const displayDiffMessage = () => {
                if (jobCount <= 0) {
                    return <h3 style={{color: 'red'}}>No jobs available!!!</h3>;
                }
                else if (jobCount >= 1 && jobCount < 10) {
                    return <h3 style={{color: 'orange'}}>There are a few jobs available in production.</h3>;

                }
                else {
                    return <h3 style={{color: 'green'}}>Many jobs are available in production😀.</h3>;
                }
        };

  return (
    <div>
       <h1>Advanced Job Counter</h1>
       <h2>Environment: {environment}</h2>
       <h2>Current job count: {jobCount}</h2>
       <h3>{displayDiffMessage()}</h3>
       <button onClick={handleAddJob}>Add a job</button>
       <button onClick={handleRemoveJob}>Remove a Job</button>
       <button onClick={handleResetJob}>Reset job count to zero</button>
       <button onClick={toggleEnvironment}>Toggle Evironment</button>
    </div>
  );
};

export default AdvancedJobCounter;