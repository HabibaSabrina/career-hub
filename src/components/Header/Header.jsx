import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedjobs">Applied jobs</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Header;