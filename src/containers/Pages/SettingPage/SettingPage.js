import React from 'react'
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom'
import './SettingPage.css'

export default function SettingPage() {
    let history = useHistory()
    function handleHome() {
        history.push('/')
    }
    return (
        <Router>
            <div className='max'>
                <div
                    className='sticky-top bg-primary fs-3 d-flex align-items-center px-3'
                    style={{ height: '50px' }}>
                    <i
                        className='fas fa-arrow-left'
                        onClick={handleHome}
                        style={{ cursor: 'pointer' }}></i>
                    <div className='h-a bold ml-3'>Setting</div>
                </div>
                <div>
                    <NavbarSide />
                    <div className='ml'>
                        <Switch>
                            <Route exact path='/setting' component={Profile} />
                            <Route
                                exact
                                path='/setting/password'
                                component={Password}
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
                <Link className='link-dark' to='/setting'>
                    Profile
                </Link>
            </div>
            <div className='border-bottom border-secondary py-2'>
                <Link className='link-dark' to='/setting/password'>
                    Password
                </Link>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div className='px-5 py-2'>
            <div className='d-flex justify-content-center align-items-center'>
                <img
                    src='/images/male.png'
                    className='img-thumbnail rounded-circle'
                    alt='profile'
                />
                <i className='far fa-edit icon align-self-end' />
            </div>
            <form>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        User Name:
                    </label>
                    <input
                        type='text'
                        name='username'
                        className='form-control'
                        id='username'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email:
                    </label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        id='email'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='bio' className='form-label'>
                        Bio:
                    </label>
                    <textarea
                        name='bio'
                        type='text'
                        className='form-control'
                        id='bio'
                        rows={4}
                        defaultValue={
                            "                </div>\n                <button type='submit' className='btn btn-primary'>\n                    Save\n                </button>\n            </form>\n        </div>\n"
                        }
                    />
                </div>
            </form>
        </div>
    )
}

function Password() {
    return (
        <div className='px-5 py-2'>
            <form>
                <div className='mb-3'>
                    <label htmlFor='currentpassword' className='form-label'>
                        Current Password:
                    </label>
                    <input
                        type='password'
                        name='currentpassword'
                        className='form-control'
                        id='currentpassword'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='newpassword' className='form-label'>
                        New Password:
                    </label>
                    <input
                        type='password'
                        name='newpassword'
                        className='form-control'
                        id='newpassword'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='currentpassword' className='form-label'>
                        Confirm New Password:
                    </label>
                    <input
                        type='password'
                        name='currentpassword'
                        className='form-control'
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
