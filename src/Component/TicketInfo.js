import React, { useState } from 'react'

const TicketInfo = ({result, count, tickets, children, oncycleStatus}) => {

  // /Make the TicketInfo component more interactive by adding a click event that shows more details about the tickets in that status - Bonus Challenge.
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () =>{
    setShowDetails(prev => !prev);
  };

 
  return (
    <div className={`ticket-info ${result}`} onClick={handleClick}>
      {/* <img src={image} alt={result} /> - less flexible */}
      {children}
      <span className='ticket-count'>{count}</span>

      {showDetails && (
        <ul className='ticket-details'>
            {tickets.map(ticket => (
              <li 
                key={ticket.id}
                className={`ticket-item ${ticket.status}`}
                onClick={() => oncycleStatus(ticket.id)}
                >
        
                {ticket.id}  -  {ticket.name}
              </li>
            ))}
        </ul>

      )}
    </div>
  );
};

export default TicketInfo;
