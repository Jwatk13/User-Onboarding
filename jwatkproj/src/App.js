import React, { useState } from 'react'
import './App.css';
import Form from './Form';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';

const initalFormValues = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  tos: ''
}

function App() {

  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })})
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] }) })
      }

  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors} 
        submit={handleSubmit}
      />

        {
          users.map(user => (
            <div key={user.id}>
              <p>{user.firstName} {user.lastName}</p>
              <p>{user.email}</p>
            </div>  
          ))
        }
    </div>
  );
}

export default App;
