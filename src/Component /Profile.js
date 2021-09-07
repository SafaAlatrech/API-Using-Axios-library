import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '@restart/ui/esm/Button'
const Profile = (props) => {
    const [profile, setProfile] = useState({})
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
       const getUsers = async () => {
            try {
            const res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${ props.match.params.id}`);
            setProfile (res.data)
            setIsloading(false)
                } 
            catch (error) {
               console.log (error)
            }
       }
       getUsers();
    }, [ props.match.params.id])

    return (
        <div>
           {isloading?<h1>loading ...</h1>:
  <Card style={{ width: '18rem' }}>
  <span style={{backgroundColor:'pink'}}>{profile.name[0]}</span>
  <Card.Body>
    <Card.Title>{profile.name}</Card.Title>
    <Card.Text>{profile.phone}</Card.Text>
    <Card.Text>{profile.email}</Card.Text>
    <Link to="/"><Button variant="primary">Go Back</Button> </Link>
  </Card.Body>
</Card>}
        </div>
    )
}

export default Profile
