import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
    const [scrollDirection, setScrollDirection] = useState();

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const scrollListner = e => {
        // get size of the screen
        setBodyOffset(document.body.getBoundingClientRect());
        // if last scrolled position is higher, then it's scroll up, else it's scroll down
        setScrollDirection(lastScrollPos > bodyOffset.top ? "up" : "down");
        // continue setting the top screen position
        setLastScrollPos(bodyOffset.top);
    }

    useEffect(() => {
        window.addEventListener('scroll', 
        scrollListner);
        return (() => {
            window.removeEventListener('scroll', scrollListner);
        })
    });

    return(
        <>
            <nav className={scrollDirection === "down" ? 'navbar' : 'navbar hide'}>
                
                <Link to='/' className='navbar-logo'>
                    <div>Jared Ni<div className="hidden-arrow">&nbsp; <i class="fa-solid fa-arrow-right-long"></i></div></div>
                </Link>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Experiences
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className={click ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;