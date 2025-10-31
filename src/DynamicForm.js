import React, { useState } from 'react'

const DynamicForm = () => {
        const [inputvalue, setInputvalue] = useState('');
        const [submittedItems, setSubmittedItems] = useState([]); // New state for submitted items
        const [error, setError] = useState(''); // to display an error message if the input is invalid.

        const MIN_LENGTH = 3;
    
        const handleInputChange = (event) => {
            // setInputvalue(event.target.value);
            const value = event.target.value;
            console.log(event.target.value);
            setInputvalue(value);

            // Bonus challenge: Add basic form validation (e.g., minimum length requirement) and display an error message if the input is invalid.
            if (value.trim().length < MIN_LENGTH) {
              setError(`Input must be at lest ${MIN_LENGTH} characters.`);

            }
            else {
              setError('');
            }

        };

        const handleReset = () => {
            setInputvalue('');
        };

        // Bonus challennge: Implement a "Submit" button that adds the current input to a list of submitted items (use an additional state variable for this).
        const handleSubmit = () => {
            if (inputvalue.trim().length < MIN_LENGTH) {
              setError(`Input must be at lest ${MIN_LENGTH} characters.`);

              return;
            }
            else {
                setSubmittedItems(prev => [...prev, inputvalue]);
                setInputvalue('');
                setError('')
           }  
        };

        const handleRemove = () => {
          if (submittedItems.length > 0) {
            setSubmittedItems(prev => prev.slice(0, -1));  // removes last item. This makes sure the remove logic also guards against empty arrays:
          }
          // setSubmittedItems([]);
        }

  return (
    <div>
        <h1>Dynamic Form</h1>
        <input type="text" value={inputvalue} onChange={handleInputChange} placeholder='Type something...' />
        <button value='submit' onClick={handleSubmit} disabled={!inputvalue}>
          Submit
        </button>
        <button onClick={handleReset} disabled={!inputvalue}>
          Reset
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleRemove} disabled={submittedItems.length === 0}>
          Remove
        </button>
        <div>
          <h2>Current Input:{inputvalue}</h2>
          {/* Bonus challenge: Add a character count display that updates as the user types. */}
          <p>Character count: {inputvalue.length}</p> 
        </div>
        <div>
          <h2>Submitted Items:</h2>
          <ul>
              {submittedItems.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
    </div>
  );
};

export default DynamicForm;