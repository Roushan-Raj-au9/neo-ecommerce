import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import './Header.css'

const Header = () => {
    let userInfo = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect fixed='top'>
                <Container>
                    <Link to='/' className='text-decoration-none'> <Navbar.Brand > ShopIn </Navbar.Brand> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className='col-sm-6 justify-content-center'>
                        <SearchBox />
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link >
                            <Link to='/cart'>
                                <i className='fas fa-shopping-cart' ></i> Cart
                            </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/wishlist'>
                                <i className="fas fa-light fa-heart"></i> Whislist
                                </Link>
                            </Nav.Link>
                            {
                                userInfo ? (
                                    <NavDropdown title={userInfo.name} id="username" >
                                        {/* <NavDropdown.Item>Profile</NavDropdown.Item> */}
                                        <NavDropdown.Item onClick={() => {
                                            localStorage.removeItem('user');
                                            navigate('/signin')
                                        }} >Logout</NavDropdown.Item>
                                    </NavDropdown>
                                )
                                    :
                                    <Nav.Link >
                                        <i className='fas fa-user' ></i> Sign In
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header