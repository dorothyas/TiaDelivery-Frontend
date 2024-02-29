import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';

import React, { useState, useEffect } from 'react';

export function Navigation () {
  const [isAuth, setAuth ] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem('access_token')!== null ){
      setAuth(true);
    }
  }, [isAuth]);
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar href="/">
          Tia Delivery
        </Navbar>
        <Nav className="me-auto">
          {isAuth? <Nav.Link href="/">Home</Nav.Link>: null}
        </Nav>
        <Nav>{isAuth? <Nav.Link href="/logout">LogOut</Nav.Link> : <Nav.Link href="/login">Log In</Nav.Link>}</Nav>
      </Navbar>
    </div>
  )
}

