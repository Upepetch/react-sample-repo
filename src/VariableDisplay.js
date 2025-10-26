import React from "react";

function VariableDisplay() {
 // Create variables

 let stringVar = "Welcome to React";
 let numberVar = 42;
 let boolVar = true;
 let arrayVar = ["apple", "banana", "mango", "cherry"];
 let objectVar = {emID: 'ass123', emDept: 'IT', tiltle: 'Project Manager'};
 
 // Add conditional statement

if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React";
}

    return (
      <div>
         <p>{stringVar}</p>
         <p>{numberVar}</p>
         <p>{boolVar ? "True" : "False"}</p>
         <ul>{arrayVar.map((num, i) => <li key={i}>{num}</li>)}</ul>
         <p>{objectVar.tiltle}</p>
      </div>


    );

}


export default VariableDisplay;

