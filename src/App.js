import { useState } from "react";

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
  const [show, setShow] = useState(true);


  const jobs = [
      {id: crypto.randomUUID(), name: 'Email Extractor', status: 'running'}, 
      {id: crypto.randomUUID(), name: 'Data Analyzer', status: 'completed'}, 
      {id: crypto.randomUUID(), name: 'Data Collector', status: 'pending'},
      {id: crypto.randomUUID(), name: 'Report Generator', status: 'failed'}
  ];
  
  return (
    <div className="app">
      <Header />

      <section className="counters">
        <JobCounter /> 
        <AdvancedJobCounter />
      </section>
      <section className="forms">
        <DynamicForm />
        <BotListManager />
        <DynamicBotManager />
      </section>
        
        <button onClick={() => setShow(!show)}>
        {show ? 'Hide Job List' : 'Show Job List'}
        </button>
        {show && <JobList jobs={jobs}/>}
        
        <Footer />
    </div>
  );
};

export default App;
