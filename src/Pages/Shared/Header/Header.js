import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    return (
        <section className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to={"/"}>PHONE GARAGE</Link>
                        <ul className="navbar-nav ms-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/"}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/inventoryUpdate"}>INVENTORY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/blogs"}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>ABOUT</Link>
                            </li>
                            {
                                user ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/manageInventory"}>Manage Items</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/addNewItem"}>Add Item</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/myItems"}>My items</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={() => signOut(auth)} className="nav-link" to={"/signup"}>Log Out</Link>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Log In</Link>
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