import React, { useState } from 'react'

const AddUserForm = (props) => {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Username</label>
      <input type="text" name="username" value="" />
      <button>Add new user</button>
    </form>
  )
}

//create initial state with empty values
const initalFormState = { 
    id: null, 
    name: '',
    username: ''
}

//set user state to inital state
const [user, setUser] = useState(initalFormState)

//create event handler for input changes
const handleInputChange = (event) => {
    const {
        name,
        value
    } = event.target

    setUser({...user, [name]: value })
}

export default AddUserForm