import React, { useState } from 'react'

const DynamicBotManager = () => {
  const [botList , setBotList] = useState([
    { id: crypto.randomUUID(), name: 'Email Bot', status: 'Active' },
    { id: crypto.randomUUID(), name: 'Data Bot', status: 'Inactive' }
   ]);

   const [newBot, setNewBot] = useState({ id: '', name: '', status: ''});

   const [validationMessage, setValidationMessage] = useState('');


const addToList = () => {
    // Add form valdation
  if (newBot.name.trim() === '' || newBot.status.trim() === '') {
    setValidationMessage('*Please fill in both Name and Status before adding.');
    return;

  }
    
        const botWithId = {
        ...newBot, id: crypto.randomUUID() // 👈 UUID (Universally Unique Identifier) generated here
        };
    
        setBotList([...botList, botWithId]); // set as an array ([...]) not a function
        // setBotList(prev => [...prev, newBot]); // or this
        setNewBot({ name: '', status: ''});
  
};

const deleteBot = (id) => {
    // setBotList(prev => (prev.length > 0 ? prev.slice(0, - 1) : prev)); // this is to prevent errors when the list is empty for (arrays not numbers)
    setBotList(botList.filter(botList => id !== botList.id));

};


  return (
    <div>
        <h1>Dynamic Bot Manager</h1>

        {/* <input type="text" value={newBot.id} onChange={(e) => setNewBot({...newBot, id: e.target.value})} placeholder='Enter your Id' /> */}
        <input type="text" value={newBot.name} onChange={(e) => setNewBot({...newBot, name: e.target.value})} placeholder='Enter your Bot name' required/>
        <input type="text" value={newBot.status} onChange={(e) => setNewBot({...newBot, status: e.target.value})} placeholder='Enter your Bot Status' required/>
        <button onClick={addToList} disabled={!newBot.name.trim() || !newBot.status.trim()}>Add Bot</button>
        <p style={{color: 'red'}}>{validationMessage}</p>

        <select value={newBot.status} onChange={(e) => setNewBot({...newBot, status: e.target.value})}>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </select>
        <ul>
          {
          botList.map(({id, name, status}) => <li key={id}>{id} - {name} - {status} 
          <button onClick={() => deleteBot(id)} style={{margin: '2px'}}>Delete Bot</button></li>) // function reference/arrow function to prevent automatic function call
          }
        </ul>
        
    </div>
  );
};


export default DynamicBotManager;
