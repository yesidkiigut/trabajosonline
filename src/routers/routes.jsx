import {JobDetails} from '../components/JobDetails'
import {JobLists} from '../components/JobList'
import { BrowserRouter as Router, Routes, Route, navigate } from "react-router-dom"<


export function MyRoutes() {
  return (<Router>
        <Routes>
            <Route exact path="/" element={<JobLists/>}></Route>
            <Route exact path="/jobs" element={<JobLists/>}></Route>
            <Route exact path="/jobs/:position" element={<JobDetails/>}></Route>
        </Routes>
  </Router>);
}