import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    
    return(
        <>
            <nav className='navbar'>
                
                <Link to='/' className='navbar-logo'>
                    <div>Jared Ni<div className="hidden-arrow">&nbsp; <i class="fa-solid fa-arrow-right-long"></i></div></div>
                </Link>
                {/* <div class="showhim">HOVER ME
                    <div class="showme">hai</div>
                </div> */}
                
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