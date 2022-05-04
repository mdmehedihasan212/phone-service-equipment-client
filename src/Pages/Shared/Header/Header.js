import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <section className='sticky-top text-uppercase' style={{ height: '80px' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="navbarTogglerDemo01">
                        <Link className="navbar-brand fw-bolder fs-4" to={"/"}><span style={{ color: 'goldenrod' }}>PHONE</span> GARAGE</Link>
                        <ul className="navbar-nav ms-auto mb-2">
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to={"/"}>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" aria-current="page" to={"/inventoryUpdate"}>Inventory</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to={"/blogs"}>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to={"/about"}>About</CustomLink>
                            </li>
                            {
                                user ?
                                    <>
                                        <li className="nav-item">
                                            <CustomLink className="nav-link" to={"/manageInventory"}>Manage Items</CustomLink>
                                        </li>
                                        <li className="nav-item">
                                            <CustomLink className="nav-link" to={"/addNewItem"}>Add Item</CustomLink>
                                        </li>
                                        <li className="nav-item">
                                            <CustomLink className="nav-link" to={"/myItems"}>My Items</CustomLink>
                                        </li>
                                        <li className="nav-item">
                                            <CustomLink onClick={() => signOut(auth)} className="nav-link" to={"/signup"}>Log Out</CustomLink>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to={"/login"}>Login</CustomLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;