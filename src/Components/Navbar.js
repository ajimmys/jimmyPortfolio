import React from 'react';
import {Link} from 'react-router-dom';
import GitHubLogo from '../Images/GitHubLogo.png';
import LinkedInLogo from '../Images/LinkedInLogo.png';
import DiscordLogo from '../Images/DiscordLogo.png'

function Navbar(){
    
    return (
        <nav>
            <ul class="navbar">
                <li>
                    <Link to="/" activeClass={"active"}>Home</Link>
                </li>
                <li>
                    <Link to="/WorkingOnNow" activeClass={"active"}>In Progress</Link>
                </li>
                <li>
                    <Link to="/ContactMe" activeClass={"active"}>Contact Me</Link>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-schnitzer-359295136/">
                        <img class="reference-nav-logo" src={LinkedInLogo} alt="Linked-In"/></a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ajimmys?tab=repositories">
                        <img class="reference-nav-logo" src={GitHubLogo} alt="Git-Hub"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/users/258014168161058817">
                        <img className="reference-nav-logo" src={DiscordLogo} alt="Discord"/>
                    </a>
                </li>

            </ul>
        </nav>

    );
}

export default Navbar;