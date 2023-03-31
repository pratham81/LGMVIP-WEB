import React, { useState } from "react"
import  './App.css'
const App = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
    
  }

  return (
    <div className="id">
      <h2>Click in GetData Button to fetch all Data</h2>
      <button className="button" onClick={fetchData}> Get Data </button>
      <h1>Users:</h1>
        <ul>
          { users.map(user => (
            <>
            <li className="color" key={user.id}>Name : {user.name} <br />
            Email : {user.email}
            </li>
            </>
          ))}
        </ul>
    </div>
  )
}

export default App
