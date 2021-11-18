import React, { FunctionComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Header: FunctionComponent = (props) => {
    const { user } = useSelector((state: RootState) => state.user);
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    conduit
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    {user ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    <i className="ion-compose" />
                                    &nbsp;New Article
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    <i className="ion-gear-a" />
                                    &nbsp;Settings
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active' : ''}`
                                    }
                                    to="/signin"
                                >
                                    Sign in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active' : ''}`
                                    }
                                    to="signup"
                                >
                                    Sign up
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
