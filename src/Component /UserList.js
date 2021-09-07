import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'
const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState('')
    useEffect(() => {
       const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>setUsers(data))
        .catch(erreur => console.error(erreur))
             }
             fetchUsers();
    }, [])

  if (loading) {
      <Spinner animation='border' variant='danger'/>
  } 

    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
          {
            users.map(
                user=> <UserCard  user={user}/>
            )
          }
        </div>
    )
}

export default UserList
