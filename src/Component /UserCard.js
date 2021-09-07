import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
<div>
<Card style={{ width: '18rem' }}>
  <span style={{backgroundColor:'pink'}}>{user.name[0]}</span>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.phone}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Link to={`/profil/${user.id}`}><Button variant="primary">See Profil</Button> </Link>
    
  </Card.Body>
</Card>
</div>
    )
}

export default UserCard
