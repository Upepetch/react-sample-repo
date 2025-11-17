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
import StatusBoard from "./Component/StatusBoard";
import JobForm from "./Component/JobFormComp";


const App = () => { 
  const [show, setShow] = useState(true);


  const [jobs, setJobs] = useState([
      {id: crypto.randomUUID(), name: 'Email Extractor', status: 'running'}, 
      {id: crypto.randomUUID(), name: 'Data Analyzer', status: 'completed'}, 
      {id: crypto.randomUUID(), name: 'Data Collector', status: 'pending'},
      {id: crypto.randomUUID(), name: 'Report Generator', status: 'failed'}
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [newJobName, setJobName] = useState('');
  const [newJobStatus, setNewJobStatus] = useState('');

  const handleAddJob = (e) => {
    e.preventDefault();
    if (!newJobName.trim()) return;

    const newJob = {
      id: crypto.randomUUID(),
      name: newJobName.trim(),
      status: 'pending'
    };

    setJobs(prevJobs => [...prevJobs, newJob]);
    setJobName('');
    setNewJobStatus('pending');
  };
  
  const handleDeleteJob =(idToDelete) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== idToDelete))
  }

const filteredJobs = jobs.filter(job => 
  job.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
);

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
      <section>
          <h1><strong>Job Board Application</strong></h1>
          <h2><strong>Add new Job with custom details</strong></h2>

            <form onSubmit={handleAddJob}>
            <input type="text"
            placeholder="Job name"
            value={newJobName}
            onChange={(e) => setJobName(e.target.value)}
            />

            <select value={newJobStatus}
             onChange={(e) => setNewJobStatus(e.target.value)}
            >
                <option value="Pending">Pending</option>
                <option value="running">Running</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
            </select>
            <button type="submit">Add Job</button>
          </form>
      
          <h3><strong>Search bar to filter jobs by name</strong></h3>  
          <input type="text" 
             placeholder="Search job by name..." 
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><br 
          />

          <button onClick={() => setShow(!show)}>
            {show ? 'Hide Job List' : 'Show Job List'}
          </button>

          {show && <JobList jobs={filteredJobs} onDelete={handleDeleteJob}/>}
      </section>
        
        <StatusBoard />
        <JobForm />
        <Footer />
    </div>
  );
};

export default App;
