import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function SidebarList() {
    return (
        <Fragment>
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className='nav-item'>
                <Link to='#' className='nav-link active'>
                    <i className='nav-icon fas fa-tachometer-alt' />
                    <p>
                        Dashboard
                        <i className='right fas fa-angle-left' />
                    </p>
                </Link>
                <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Profile Settings</p>
                        </Link>
                    </li>
                    {/* add some list bellow */}
                </ul>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-compass' />
                    <p>Journey</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-book' />
                    <p>Category</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-globe' />
                    <p>Community</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-image' />
                    <p>Gallery</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-sign' />
                    <p>Tips &amp; Tricks</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon fas fa-headset' />
                    <p>Contacts Us</p>
                </Link>
            </li>

            {/* Mail start */}
            <li className='nav-item'>
                <Link to='#' className='nav-link'>
                    <i className='nav-icon far fa-envelope' />
                    <p>
                        Mailbox
                        <i className='fas fa-angle-left right' />
                    </p>
                </Link>
                <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                        <Link to='#' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Inbox</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Compose</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Read</p>
                        </Link>
                    </li>
                </ul>
            </li>
            {/* Mail end */}
            
            {/* Development Page Only */}
              <li className='nav-item'>
                <Link to='/user-list' className='nav-link'>
                    <i className='nav-icon fas fa-user' />
                    <p>DEV - User List</p>
                </Link>
            </li>
        </Fragment>
    )
}
