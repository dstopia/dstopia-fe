import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './SettingPage.css'

export default function SettingPage() {
    return (
        <Router>
            <div className='max'>
                <div
                    className='sticky-top bg-secondary fs-3 d-flex align-items-center px-3'
                    style={{ height: '50px' }}>
                    <i className='bi bi-sliders h-a bg-secondary'></i>
                    <div className='h-a bold ml-2'>Setting</div>
                </div>
                <div>
                    <NavbarSide />
                    <div className='ml'>
                        <Switch>
                            <Route exact path='/' component={Profile} />
                            <Route
                                exact
                                path='/password'
                                component={Password}
                            />
                            <Route
                                exact
                                path='/notification'
                                component={Notification}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

function NavbarSide() {
    return (
        <div className='px-3  border-end border-secondary side-fixed'>
            <div className='border-bottom border-secondary py-2'>
                <Link className='link-dark' to='/'>
                    Profile
                </Link>
            </div>
            <div className='border-bottom border-secondary py-2'>
                <Link className='link-dark' to='/password'>
                    Password
                </Link>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div className='p-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <img
                    src='/male.png'
                    className='img-thumnail rounded-circle'
                    alt='profile'></img>
                <i className='bi bi-pencil-square icon'></i>
            </div>

            <form>
                <div class='mb-3'>
                    <label for='username' class='form-label'>
                        User Name:
                    </label>
                    <input
                        type='text'
                        name='username'
                        class='form-control'
                        id='username'
                    />
                </div>
                <div class='mb-3'>
                    <label for='email' class='form-label'>
                        Email:
                    </label>
                    <input
                        type='email'
                        name='email'
                        class='form-control'
                        id='email'
                    />
                </div>
                <div class='mb-3'>
                    <label for='bio' class='form-label'>
                        Bio:
                    </label>
                    <textarea
                        name='bio'
                        type='text'
                        class='form-control'
                        id='bio'
                        rows='4'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Save
                </button>
            </form>
        </div>
    )
}

function Password() {
    return (
        <div className='p-5'>
            <form>
                <div class='mb-3'>
                    <label for='currentpassword' class='form-label'>
                        Current Password:
                    </label>
                    <input
                        type='password'
                        name='currentpassword'
                        class='form-control'
                        id='currentpassword'
                    />
                </div>
                <div class='mb-3'>
                    <label for='newpassword' class='form-label'>
                        New Password:
                    </label>
                    <input
                        type='password'
                        name='newpassword'
                        class='form-control'
                        id='newpassword'
                    />
                </div>
                <div class='mb-3'>
                    <label for='currentpassword' class='form-label'>
                        Confirm New Password:
                    </label>
                    <input
                        type='password'
                        name='currentpassword'
                        class='form-control'
                        id='currentpassword'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Change Password
                </button>
            </form>
        </div>
    )
}
