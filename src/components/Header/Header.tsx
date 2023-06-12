import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header: React.FC = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Мой сайт</Link>
                    <button className="navbar-toggler" type="button" onClick={handleMenuToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mr-auto">
                            <Link  className="nav-item nav-item__menu" to=''>
                                <span className='nav-link'>
                                    Список постов
                                </span>
                            </Link>
                            <Link  className="nav-item nav-item__menu" to='about'>
                                <span className='nav-link'>
                                    Обо мне
                                </span>
                            </Link>
                            <Link className="nav-item nav-item__menu" to='/profile'>
                                <span className="nav-link">Профиль</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;