import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../stylesheet/Header.css'
import FilterVintageTwoToneIcon from '@material-ui/icons/FilterVintageTwoTone';
import {Button} from './Button'
import { render } from '@testing-library/react';


function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [login, setLogin] = useState(sessionStorage.jwt);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const logoutHandler = () => {
        sessionStorage.removeItem("jwt")
        setLogin(null)
    }

    useEffect(() => {
        showButton();
        logoutHandler();
    }, []);

    window.addEventListener('resize', showButton);

    console.log(sessionStorage)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Xinbo <FilterVintageTwoToneIcon className='home-icon' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                            Music
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/stock' className='nav-links' onClick={closeMobileMenu}>
                            Stock
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/post' className='nav-links' onClick={closeMobileMenu}>
                            Post
                        </Link>
                    </li>
                </ul>
                { !sessionStorage.jwt ? (
                    <Link to='/login' className='login-button'>
                    {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                    </Link>
                ) : (
                    <Link to='/login'>
                    {button && <Button buttonStyle='btn--outline' onClick={logoutHandler}>LOGOUT</Button>}
                    </Link>
                )
                }
            </div>
        </nav>
        
    )
}

export default Header;
