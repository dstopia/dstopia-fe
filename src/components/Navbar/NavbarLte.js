import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLte() {
    return (
        <nav className='main-header shadow-sm navbar navbar-expand navbar-primary navbar-dark'>
            {/* Left navbar links */}
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        data-widget='pushmenu'
                        to='#'
                        role='button'>
                        <i className='fas fa-angle-right' />
                    </Link>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </li>
                {/* <li className='nav-item d-none d-sm-inline-block'>
                    <Link to='/' className='nav-link'>
                        Contact
                    </Link>
                </li>  */}
            </ul>
            {/* Right navbar links */}
            <ul className='navbar-nav ml-auto'>
                {/* Navbar Search */}
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        data-widget='navbar-search'
                        data-target='#navbar-search3'
                        to='/'
                        role='button'>
                        <i className='fas fa-search' />
                    </Link>
                    <div className='navbar-search-block' id='navbar-search3'>
                        <form className='form-inline'>
                            <div className='input-group input-group-sm'>
                                <input
                                    className='form-control form-control-navbar'
                                    type='search'
                                    placeholder='Search'
                                    aria-label='Search'
                                />
                                <div className='input-group-append'>
                                    <button
                                        className='btn btn-navbar'
                                        type='submit'>
                                        <i className='fas fa-search' />
                                    </button>
                                    <button
                                        className='btn btn-navbar'
                                        type='button'
                                        data-widget='navbar-search'>
                                        <i className='fas fa-times' />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Messages Dropdown Menu */}
                <li className='nav-item dropdown'>
                    <Link
                        className='nav-link'
                        data-toggle='dropdown'
                        to='/chats'>
                        <i className='far fa-comments' />
                        <span className='badge badge-danger navbar-badge'>
                            3
                        </span>
                    </Link>
                </li>
                {/* Notifications Dropdown Menu */}
                <li className='nav-item dropdown'>
                    <Link className='nav-link' data-toggle='dropdown' to='/'>
                        <i className='far fa-bell' />
                        <span className='badge badge-warning navbar-badge'>
                            15
                        </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        data-widget='fullscreen'
                        to='#'
                        role='button'>
                        <i className='fas fa-expand-arrows-alt' />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link'
                        data-widget='control-sidebar'
                        data-slide='true'
                        to='/login'
                        role='button'>
                        <i className='fas fa-user'></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
