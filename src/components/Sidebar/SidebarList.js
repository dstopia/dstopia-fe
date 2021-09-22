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
                    <i className='nav-icon far fa-image' />
                    <p>Journey</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon far fa-image' />
                    <p>Category</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon far fa-image' />
                    <p>Community</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon far fa-image' />
                    <p>Gallery</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon far fa-image' />
                    <p>Tips &amp; Tricks</p>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-link'>
                    <i className='nav-icon far fa-image' />
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
                        <Link href='mailbox/mailbox.html' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Inbox</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='mailbox/compose.html' className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Compose</p>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            href='mailbox/read-mail.html'
                            className='nav-link'>
                            <i className='far fa-circle nav-icon' />
                            <p>Read</p>
                        </Link>
                    </li>
                </ul>
            </li>
            {/* Mail end */}
        </Fragment>
    )
}
