/* eslint-disable no-unused-vars */
import './App.css'
import { Header }  from './components/Header.jsx'
import { MyRoutes } from './routers/routes.jsx'

function App() { 

  return (
    <>
      <div className="App">
       <Header/>
       <MyRoutes/>
      </div>
      
    </>
  )
}

export default App
