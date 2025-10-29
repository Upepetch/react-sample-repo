import React, { useState } from 'react'

const JobCounter = () => {
                      // let jobCount = 0; - for exercise demo purposes

    const [jobCount, setJobCount] = useState(0); // React's useState hook

    const handleAddJob = () => {
                    // jobCount++ - for demo purposes
                   // console.log('New job count:'); 

    setJobCount (prev => prev + 1); // Increment in React JS
    // setJobCount(jobCount + 1); // This works fine in simple cases, but it can lead to bugs if:
   
   }

  return (
    <div>
        <h1>Job Counter</h1>
        <p>Current jobs count: {jobCount}</p>
        <button onClick={handleAddJob} value='Add job'>Add Job</button>
    </div>
  );
}


export default JobCounter;