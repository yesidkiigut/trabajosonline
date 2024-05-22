/* eslint-disable no-unused-vars */
import './App.css'
import { Header }  from './components/Header.jsx'
import { JobDetails } from './components/JobDetails.jsx'
import { JobList } from './components/JobList.jsx'

function App() {
 

  return (
    <>
      <h1>Proyecto JOBS DEV</h1>
      <div className="App">
       <Header></Header>
       <JobDetails></JobDetails>
       <JobList></JobList>
      </div>
      
    </>
  )
}

export default App
