import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
     <Link to="/home">Home</Link>
    </Navbar.Brand>
    </Container>
  </Navbar>
        </div>
    )
}

export default Navigation
