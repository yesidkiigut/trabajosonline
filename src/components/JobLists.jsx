/* eslint-disable no-unused-vars */
import { jobs } from "../data/data";
import { link } from "react-router-dom";
import { useState } from "react";

export function JobLists() {
  const [jobData, setJobData] = useState (jobs)

  return (
      <div>
        {jobData.map((item)=>(
          <div/>
        ))}
      </div>
  );
}