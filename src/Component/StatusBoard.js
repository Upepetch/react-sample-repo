import React, { useState } from 'react';
import TicketInfo from './TicketInfo';
import completedImage from './images/completedImage.jpg';
import inprogressImage from './images/inprogressImage.png';
import failedImage from './images/failedImage.png';

const StatusBoard = () => {
 const [jobs, setJobs] = useState([
  {id: crypto.randomUUID(), status: 'failed', name: 'API timeout issue'},
  {id: crypto.randomUUID(), status: 'in-progress',  name: 'Update dashboard layout' },
  {id: crypto.randomUUID(), status: 'completed', name: 'Fix login bug' },
 ]);

  const completedTickets = jobs.filter(job => job.status === 'completed');
  const inProgressTickets = jobs.filter(job => job.status === 'in-progress');
  const failedTickets = jobs.filter(job => job.status === 'failed');

  const [newStatus, setNewStatus] = useState('completed');
  const [newName, setNewName] = useState('');

  const handleAddJob = (e) => {
    e.preventDefault();
    const newTicket = {
      id: crypto.randomUUID(),
      status: newStatus.trim(),
      name: newName.trim()
    };
    setJobs(prev => [...prev, newTicket]);
    setNewName('');
    setNewStatus('completed');
  };

  
   // Create an animation for when the status of a ticket changes.
  const cycleStatus =(id) => {
    setJobs(prev =>
      prev.map(job =>
        job.id === id
        ? {
          ...job, 
          status:
           job.status === 'completed'
            ? 'in-progess'
            : job.status === 'in-progress'
            ? 'failed'
            : 'completed'
        }
        : job
      )
    );
  };


  return (
    <div className='status-board'>
      <h1>Status Board</h1>
      {/* Implement a feature to add new tickets and update the counts dynamically - Bonus Challenge */}
      <form onSubmit={handleAddJob}>
        <label htmlFor="ticket-name">
          Ticket Name:
          <input 
            id='ticket-name'
            type="text" 
            value={newName} 
            placeholder='Enter ticket name'
             onChange={(e) => setNewName(e.target.value)} required
           />
           </label>

          <label htmlFor="ticket-status">
            Status:
          <select id='ticket-status' value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="failed">Failed</option>
          </select>
        </label>
        <button type='submit'>Add Ticket</button>

      
      </form>
      <div className='ticket-div'>
      <TicketInfo result = 'completed' count={completedTickets.length} tickets={completedTickets} oncycleStatus={cycleStatus}>
      {/* <TicketInfo result = 'completed' image={completedImage}> - less flexible */}
        <p>Tickets completed</p>
        <img src={completedImage} alt='Completed' width='100px' height='100' />

      </TicketInfo>
      <TicketInfo result = 'in-progress' count={inProgressTickets.length} tickets={inProgressTickets}>
        <p>Tickets In Progress</p>
        <img src={inprogressImage} alt='In Progress' width='100px' height='100' />

      </TicketInfo>
      <TicketInfo result = 'failed' count={failedTickets.length} tickets={failedTickets}>
        <p>Tickets Failed</p>
        <img src={failedImage} alt='Failed' width='100px' height='100' />
      </TicketInfo>
      </div>
    </div>
  );
};


export default StatusBoard;