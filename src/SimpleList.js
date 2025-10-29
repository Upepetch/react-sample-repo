import React from "react";

// simple list component
function SimpleList ({items = [] }) {
    return(
        <ul>
           {items.map((item, i) => ( 
            <li key={i}>{item}</li>
        
          ))}
        </ul>
    );
}

export default SimpleList;
