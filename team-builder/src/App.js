import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'

const initialTeamMemberList = [
  {
    id: uuid(), 
    name: 'Joe',
    email: 'jlpanetta1681@gmail.com',
    role: 'Student',
  },

]

  const initialFormValues = {
    //text 
    name: "",
    email:"",
    //dropdown
    role: "",
  }



  function App() {
    const [teams, setTeams] = useState(initialTeamMemberList)
     const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
