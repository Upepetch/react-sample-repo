import React, { useState } from "react";

// Set multi-level switching rendering

import SimpleList from "./SimpleList"; // Bonus
import StyledButton from "./StyledButton";
import CreateJob from "./CreateJob";
import VariableDisplay from "./VariableDisplay";
import JobCounter from "./JobCounter";
import AdvancedJobCounter from "./AdvancedJobCounter";
import DynamicForm from "./DynamicForm";
import BotListManager from "./BotListManager";
import DynamicBotManager from "./DynamicBotManager";
import { Header } from "./Component/Header";
import { Footer } from "./Component/Footer";
import { JobList } from "./Component/JobList";
import './App.css';


const App = () => { 
  const jobs = [
      {id: crypto.randomUUID(), name: 'Email Extractor', status: 'running'}, 
      {id: crypto.randomUUID(), name: 'Data Analyzer', status: 'completed'}, 
      {id: crypto.randomUUID(), name: 'Report Generator', status: 'running'}
  ];
  
 

  const [view, setView] = useState('job');
  const [showView, setShowView] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const arrayVar = ["apple", "banana", "mango", "cherry"];

  return (
    <div>
        {/* <button style={{color: 'red', textAlign: 'center'}} onClick={() => setShowView(prev => !prev)}>
            {showView ? 'Hide View' : 'Show View'}
         </button>

           <button style={{color: 'red', textAlign: 'center'}}  onClick={() => setShowButtons(prev => !prev)}>
             {showButtons ? 'Hide Buttons' : 'Show Buttons'}
         </button>
       
       {showButtons && (
          <>
            <button onClick={() => setView('job')}>CreateJob</button>
            <button onClick={() => setView('list')}>SimpleList</button>
            <button onClick={() => setView('button')}>StyledButton</button>
            <button onClick={() => setView('variable')}>VariableDisplay</button>
          </>
       )}

       {showView && (
          <>
            {view === 'job' && <CreateJob />}
            {view === 'list' && <SimpleList items={arrayVar} />}
            {view === 'button' && <StyledButton />}
            {view === 'variable' && <VariableDisplay />}
          </>
        )} */}
        {/* <JobCounter /> */}
        {/* <AdvancedJobCounter /> */}
        {/* <DynamicForm /> */}
        {/* <BotListManager /> */}
        {/* <DynamicBotManager /> */}
        <Header />
        <JobList jobs={jobs}/>
        <Footer />
    </div>
  )
}

  //const object1 = {empID: 'Emp123', emdept: 'IT'};

  // const arrayVar = ["apple", "banana", "mango", "cherry"]; // Bonus


export default App;


// ps: when returning you use curly brackets ({}) with your defined variable (you always return something)

