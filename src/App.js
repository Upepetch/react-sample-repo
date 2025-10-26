import React from "react";

// import SimpleList from "./SimpleList"; // Bonus

import VariableDisplay from "./VariableDisplay";


function App() {
  //const object1 = {empID: 'Emp123', emdept: 'IT'};

  // const arrayVar = ["apple", "banana", "mango", "cherry"]; // Bonus


  return (
    <div>
       {/* Employee department: {object1.emdept} */}

       <VariableDisplay/>

       {/* <SimpleList items={arrayVar}/> //   Bonus     */} 
    </div>


  )

}



export default App;


// ps: when returning you use curly brackets ({}) with your defined variable (you always return something)

