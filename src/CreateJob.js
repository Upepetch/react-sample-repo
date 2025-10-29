import React from 'react'

const CreateJob = () => {
      const jobCount = 13;
      let jobCounter = 0;
      
      function handleClickEvent() {
          
          jobCounter++
          console.log(`Run job: ${jobCounter}`);
         
        }
    
        const countJob = () => {
          if (jobCount === 0) {
            return "'No jobs to schedule today!!!";
          }

          else {
            return  `Today's running jobs from bot is: ${jobCount}`;
        }   //   return jobCount === 0 ? 'No jobs to schedule today!!!' : `Today's running jobs from bot is ${jobCount}`
      }
 
  return ( 
      <div>
        <h1>Jobs: {countJob()}</h1>
        <h3>Running job count: {jobCounter}</h3>
        <button onClick={handleClickEvent} className='dfsdfs' value = 'Create job'>Create a job</button> 
      </div>
  );
}


export default CreateJob;
