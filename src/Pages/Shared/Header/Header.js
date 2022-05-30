import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleToSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light" className='text-uppercase main-nav'>
                <Container>
                    <Navbar.Brand to={'/'} as={Link} className="navbar-brand navbar-name"><span>PHONE</span> GARAGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navigate-container ms-auto">
                            <CustomLink to={'/'}>Home</CustomLink>
                            <CustomLink to={"/blogs"}>Blogs</CustomLink>
                            {
                                user ?
                                    <>
                                        <CustomLink to={"/manageInventory"}>Manage Items</CustomLink>
                                        <CustomLink to={"/addNewItem"}>Add Item</CustomLink>
                                        <CustomLink to={"/myItems"}>My Items</CustomLink>
                                        <CustomLink to={"/login"} onClick={handleToSignOut}>Log Out</CustomLink>
                                    </>
                                    :
                                    <CustomLink to={"/login"}>Login</CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;