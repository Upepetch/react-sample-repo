import React from 'react';
import './AppForm.css';

export const AppForm = () => {
  return (
    <div className='form-header'>
        <form>
            <input type="text" className='bot-in' placeholder='Enter the job' />

           <div className='form-details'>
                <div className='bottom-line'>
                    <button className='tag'>Read Emails</button>
                    <button className='tag'>Web Parsing</button>
                    <button className='tag'>Send Emails</button>
                </div>
                <div>
                <select className='job-status'>
                    <option value="start">Start process</option>
                    <option value="running">Run process</option>
                    <option value="stopped">Stop process</option>
                </select>
                <button type='submit' className='submit-data'>Add Job</button>
              </div>
            </div>
        </form>

    </div>
  );
};