import React from "react";
import { JobItem } from "./JobItem";

export const JobList = ({jobs}) => {

  return (
    <div className='job-list'>
        <h1>Job List</h1>
          <ul>
          {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
          ))}
          </ul>
    </div>
  );
};
