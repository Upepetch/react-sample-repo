import React, { useState } from 'react'

const BotListManager = () => {

    const [bots, setBots] = useState([
        {id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails."},
        {id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications."},
        {id: 3, name: "Data Analyser", status: "Stopped", task: "Analysing Data."}
    ]);

    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

      const styleBot = {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        borderBottom: '1px solid #ccc',
        marginBottom: '10px'
      };

      
    const triggerJob = (id) => {

        setBots(prev =>
           prev.map(bot =>
             bot.id === id 
             ? {
                ...bot, status: 
                bot.id === 1 ? 'Running':
                bot.id === 2 ? 'Completed' : 
                'Stopped'
              } 
             : bot
        )
      );
    };
  
    // 
    const handleAddBot = (e) => {
      e.preventDefault();
      const newBot = {
        id: Date.now(),
        name,
        task,
        status: 'Pending'
      };
      setBots(prev => [...prev, newBot]);
    };

    const handleDeleteBot = (id) => {
      setBots(prev => prev.filter(bot => bot.id !== id));
    };

  const filteredBots = filterStatus
     ? bots.filter(bot => bot.status === filterStatus)
     : bots;
  return (
    <div className='bot-list-manager'>
      <h1>Bot List Manager</h1>
      <ul>
        {filteredBots.map(bot => (
          <li key={bot.id} style={styleBot}>
            <span style={{
              marginRight: '10px',
              color: bot.status === 'Running' ? 'green' :
                     bot.status === 'Completed' ? 'orange' :
                     bot.status === 'Pending' ? 'blue' : 'red'
            }}>
              {bot.id} - {bot.name} - {bot.status} - {bot.task}
          </span>
          <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
{/* Bonus: Add a "Delete Bot" button and implement the functionality to remove a bot from the list. */}
           <button onClick={() => handleDeleteBot(bot.id)}>Delete Bot</button>
          </li>))}
      </ul>


{/* Bonus: Add a form to allow users to add new bots to the list. */}
      <form onSubmit={handleAddBot}>
        <input type='text' placeholder='Bot name' value={name} onChange={e => setName(e.target.value)} required/>
        <input type='text' placeholder='Task' value={task} onChange={e => setTask(e.target.value) } required/>
        <button type='submit'>Add Bot</button>
      </form>

{/* Bonus: Implement a filter functionality to show only bots with a specific status. */}
      <select name="" id="" onChange={e => setFilterStatus(e.target.value)}>
        <option value="">All</option>
        <option value="Running">Running</option>
        <option value="Completed">Completed</option>
        <option value="Stopped">Stopped</option>
        <option value="Pending">Pending</option>
      </select>

    </div>
  );
};


export default BotListManager;
