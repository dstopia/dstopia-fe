import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-info'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        Dstopia
                    </Link>
                    <button
                        className='navbar-toggler shadow-none border-0'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    aria-current='page'
                                    to='/journey'>
                                    Journey
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/category'>
                                    Category
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/community'>
                                    Community
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/galery'>
                                    Galery
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    to='/tips-and-tricks'>
                                    Tips &amp; Tricks
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/contact-us'>
                                    Contact Us
                                </Link>
                            </li>
                            <li className='nav-item dropdown'>
                                <Link
                                    className='nav-link dropdown-toggle'
                                    to='/'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                    <i className='bi bi-person-fill' />
                                </Link>
                                <ul
                                    className='dropdown-menu'
                                    aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/profile'>
                                            <i className='bi bi-person-plus' />{' '}
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className='dropdown-item'
                                            to='/dashboard'>
                                            <i className='bi bi-grid-1x2' /> My
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <form action='#' method='post'>
                                            <button
                                                type='submit'
                                                className='dropdown-item'>
                                                <i className='bi bi-box-arrow-right' />
                                                Logout
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Router>
    )
}
