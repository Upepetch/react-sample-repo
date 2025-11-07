import React from 'react'

export const JobItem = ({job}) => {
  const {id, name, status} = job;

  const styleAtt = {
    color:
           status === 'completed' ? 'green':
           status === 'running' ? 'orange':
           status === 'pending' ? 'blue' :
           status === 'failed' ? 'red':
           'default'
  };
  return (
    <li className='job-item' style={styleAtt}>
      <span>{id}</span> - <span>{name}</span> - <span className='status'>{status}</span>
      {status === 'running' && <p>Job is in progress.</p>}
      {status === 'completed' && <p>Job completed successfully.</p>}
      {status === 'pending' && <p>Job is awaiting assignment.</p>}
      {status === 'failed' && <p>Job failed. Please check logs</p>}
    </li>
  );
};
