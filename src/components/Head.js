import React from 'react'
import { Navbar, Button, Nav, Form } from 'react-bootstrap'

const Head = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <div className='container'>
          <Navbar.Brand href="/"><img style={{left:"60px",paddingRight:"10px",height:"70px", width:"80px"}} alt='nice' src='../songs_images/Deltax.png'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="/toptenart">Top 10 Artists</Nav.Link>
            <Nav.Link href="/addsongs">Addsongs</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}

export default Head
