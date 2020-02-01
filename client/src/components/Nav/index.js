import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavHeader = () => {

    return (
        <Navbar expand='sm'>
            <Navbar.Brand>Cujo's Book Search App</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Link to='/' className='p-2'>Search</Link>
                    <Link to='/saved' className='p-2'>Saved</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavHeader