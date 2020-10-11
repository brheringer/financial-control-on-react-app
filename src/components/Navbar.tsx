import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-dark text-light p-2">
            |<Link to="/"> Accounts List </Link>
            |<Link to="/addAccount"> Add Account </Link>
            |
        </div>
    );
}

export default Navbar;