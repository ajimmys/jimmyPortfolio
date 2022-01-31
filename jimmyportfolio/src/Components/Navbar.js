import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <ul class="topnav">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-schnitzer-359295136/">Linked-In</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ajimmys?tab=repositories">Git Hub</a></li>
            <li><Link to={"/About"} activeClass={"active"}>About</Link></li>
            <li><Link to={"/"} activeClass={"active"}>Home</Link></li>
        </ul>
    );
}

export default Navbar;