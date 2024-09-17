import React, { useState, useEffect} from 'react'
import * as yup from 'yup'
import './App.css';
import axios from 'axios'

import NewUser from './components/Form'
import { formSchema } from './components/FormSchema'
import User from './components/user'

const initialValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
}
const initialErrors = {
  name: "",
  email: "",
  password: "",
}

const initialUsers = []
const initialDisabled = true


function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues) 
  const [formErrors, setFormErrors] = useState(initialErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(({data}) => setUsers(data))
    .catch(err => console.log(err))
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(({data}) => {
      setUsers([data, ...users])
      setFormValues(initialValues)
    })
    .catch()
  }

  //EVENT HANDLERS
  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
       .validate(value)
       .then(() => setFormErrors({...formErrors, [name]: ''}))
       .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]})) 
    setFormValues({
       ...formValues,
       [name]: value
     })
  }

  const formSubmit = () => {
    const newUser = {
      name:formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(valid))
  }, [formValues])


  return (
    <div className='container'>
      <h1>New User</h1>

      <NewUser
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {/* {
        users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      } */}
    </div>
  )
}

export default App;
