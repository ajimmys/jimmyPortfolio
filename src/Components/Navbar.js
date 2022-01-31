import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    
    return (
        <div>
            <ul class="navbar">
                <li><Link to="/" activeClass={"active"}>Home</Link></li>
                <li><Link to="/About" activeClass={"active"}>About</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-schnitzer-359295136/">Linked-In</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ajimmys?tab=repositories">Git Hub</a></li>
            </ul>
        </div>

    );
}

export default Navbar;