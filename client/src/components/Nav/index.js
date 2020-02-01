import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal } from 'react-bootstrap';


const NavHeader = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <Navbar expand='sm'>
                <Navbar.Brand>Cujo's Book Search App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Link to='/' className='p-2'>Search</Link>
                        <Link to='/saved' className='p-2'>Saved</Link>
                        <Link className='p-2' onClick={() => setShow(true)}>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Modal size='lg' show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to the Google Book React Project</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    This project is a Full Stack web application utilizing the MERN Stack. The project has 2 pages that the user can flip between, Search and Saved. When the user is on the Search Page they can query the Google books API which will return 10 results. The user can than save their book of choice to the database (MongoDB) or go to the Google Book store to purchase the book using the view button. 
                    <br/>
                    <br/>
                    When the user flips over to the Saved page they will see their Saved book as well as other existing books in the Database. From here the user can view the book in the Google Book store or the user can delete the book from the database.
                    <br/>
                    <br/>
                    This project was an excellent learning experience as I did not previously realize Bootstrap had a React specific library for building components (Hence the mix and match use of Bootstrap). This project was to work on and improve my React Hooks skills as well as learn and better understand MongoDB and how it is utilized in comparison to MySQl. One future version I would like to do is to allow users specifically to log in and save books to their account. I would likely utilize MySQL for this though as it is a relational DB.
                    <br/>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default NavHeader