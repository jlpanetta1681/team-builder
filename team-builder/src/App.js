
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from 'team-builder\src\Form.js'
import React, {useState} from 'react'
import TeamMember from './TeamMember'
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
    const [TeamMembers, setTeamMembers] = useState(initialTeamMemberList)
     const [formValues, setFormValues] = useState(initialFormValues)
     
     
     
     const updateForm = (inputName, inputValue) => { 
      setFormValues({ ...formValues, [inputName]: inputValue })
    };
 
    const submitForm = () => {
      const teamMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role,
      }
      setTeamMembers([...TeamMember, TeamMember])
    }

 
    return(
      <div className='container'>
      <header><h1>Team Builder</h1></header>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {TeamMember.map(TeamMember=> {
          return (
            <TeamMember key={TeamMember.id} details={TeamMember} />
          )
        })
      }
    </div>
    )
    }
   
   
  
     

export default App;
