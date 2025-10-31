import React, { useState } from 'react'

const CreateJob = () => {
      const jobCount = 13;
      let [jobCounter, setJobCounter] = useState(0);
      const [inputValue, setInputValue] = useState('')

      function handleClickEvent() {
          setJobCounter(jobCounter + 1);
          console.log(`Run job: ${jobCounter}`);
        }

      const handleSubtractEvent = () => {
          setJobCounter(jobCounter - 1);
        }

      const handleResetEvent = () => {
        setJobCounter(0)
      }

      const handleChange = (event) => {
        // you an (event) as a parameter
        console.log(event.target.value);
        setInputValue(event.target.value); // to make it show on the browser you need to use setInputValue (useState) instead of console.log()
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
        <h3>Bots running in production: {jobCounter}</h3>
        <h3><input type="text" value={inputValue} onChange={handleChange} /></h3>
        <h1>Input value. You typed: {inputValue}</h1>
        <button onClick={handleClickEvent} className='dfsdfs' value = 'Create job'>Create a job</button> 
        <button onClick={handleSubtractEvent} className='dfsdfs' value = 'Create job'>Remove a job</button> 
        <button onClick={handleResetEvent} className='dfsdfs' value = 'Create job'>Reset</button> 
        <h3>Bots running in User Acceptance Testing (UAT): {jobCounter -5}</h3>

      </div>
  );
}


export default CreateJob;
