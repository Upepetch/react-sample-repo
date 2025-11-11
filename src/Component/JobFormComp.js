import React, { useState } from 'react'

const JobForm = () => {
  
  // Add state management to the form using React's useState hook.
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  
  // To display in the browser
  const [submittedJob, setSubmittedJob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add basic validation to ensure all fields are filled before submission.
    if (!title.trim() || !company.trim()) {
      setError('*Please fill in all fields.')
      return;

    }

    setError('');
    const job = {title, company};
    console.log('Job sumitted: ', job);
    setSubmittedJob(job)

  };


  return (
    <div className='form-header'>
      <h1>Job Management Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">
          Job title:
         <input 
            type="text"
            value={title}     
            className='bot-input'
            placeholder='Enter the job title'
            onChange={(e) => setTitle(e.target.value)}
          />
          </label>
          <br />
        <label htmlFor="company-input">
          Company:
         <input 
            type="text"
            value={company}
            className='bot-input'                           
            placeholder='Enter the company name'
            onChange={(e) => setCompany(e.target.value)}
          />
          </label>
          <br /><br />
          <div className='form-details'>
            <div className='bottom-line'>
            </div>
              <button>Read Emails</button>
              <button>Web Parsing</button>
              <button>Send Emails</button>
          </div>
          <div>
            <select className='job-status'>
              <option value="start">Start Process</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="stopped">Stopped</option>
            </select><br />
            
             {error && <p style={{color: 'red'}}>{error}</p>}
            <button type='submit' className='submit-data'>Add job</button>

            {submittedJob && (
              <div  style={{ marginTop: '1rem', color: 'green' }}>
                {/* state to show in browser */}
                <strong>Submitted Job: </strong>{submittedJob.title} at {submittedJob.company}
              </div>
            )}
          </div>
      </form>
    

    </div>
  );
};

export default JobForm;