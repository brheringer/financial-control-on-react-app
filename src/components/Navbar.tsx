import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-dark text-light p-2">
            |<Link to="/"> Home </Link>
            |<Link to="/accounts"> Accounts </Link>
            |<Link to="/resultCenters"> Result Centers </Link>
            |<Link to="/entries"> Entries </Link>
            |
        </div>
    );
}

export default Navbar;