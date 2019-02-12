import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand text-white ml-3" style={{ fontWeight: 'bold' }}>Covalence Bookstore</a>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active mr-5">
                        <Link to='/' className="nav-link text-white" style={{ fontWeight: 'bold' }}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to='/players' className="nav-link text-white" style={{ fontWeight: 'bold' }}>Books</Link>
                    </li>
                    <li className="nav-item mr-5">
                        <Link to='/account' className='nav-link text-white' style={{ fontWeight: 'bold' }}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;