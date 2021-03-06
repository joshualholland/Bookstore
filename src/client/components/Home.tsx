import * as React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <h1 className="home-head text-primary">Welcome to Covalence's Bookstore</h1>
            <h4 className="home-text text-primary">Visit our program at <a className='text-primary' href='covalence.io'>covalence.io</a></h4>
        </>
    )
}

export default Home;