import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BASE_URL from '../../../config'
import './Login.css'

export default function SignIn() {
    const [input, setInput] = useState({
        username: '',
        password: '',
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { id, value } = e.target
        setInput((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`${BASE_URL}/user/login`, input)
            .then((user) => {
                setError({})
                console.log(user.data)
            })
            .catch((err) => {
                if (err) {
                    setError(err.response.data)
                }
            })
    }

    return (
        <div className='container bg-light '>
            <div className='row vh-100 min-h align-items-center'>
                <div className='col h-100 d-none d-md-inline'>
                    <img
                        className='img-fluid image'
                        src='https://source.unsplash.com/m2Wd_bTUSGw/640x958'
                        alt='login page'></img>
                </div>
                <div className='col'>
                    <form
                        className='w-75 p-4 mx-auto shadow rounded'
                        onSubmit={handleSubmit}>
                        <h3 className='mb-4 text-center'>Login to Dstopia!</h3>
                        {error.msg && (
                            <div className='alert alert-danger' role='alert'>
                                {error.msg}
                            </div>
                        )}
                        <hr className='mb-3' />
                        <div className='mb-3'>
                            <label
                                htmlFor='username'
                                className='form-label fw-normal'>
                                Username or Email
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='username'
                                placeholder='Enter your username'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-1'>
                            <label
                                htmlFor='password'
                                className='form-label fw-normal'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                placeholder='Enter your email'
                                onChange={handleChange}
                            />
                        </div>
                        <Link to='#' className=' d-block mb-4 text-end small'>
                            Forgot password?
                        </Link>
                        <button
                            type='submit'
                            className='btn btn-outline-primary btn-block'>
                            Login
                        </button>
                        <p className='line my-3'>or</p>
                        <div className='d-flex justify-content-evenly my-3'>
                            <button
                                type='button'
                                className='btn btn-outline-primary rounded-circle'>
                                <i className='fab fa-twitter'></i>
                            </button>
                            <button
                                type='button'
                                className='btn btn-outline-primary rounded-circle'>
                                <i className='fab fa-facebook'></i>
                            </button>
                            <button
                                type='button'
                                className='btn btn-outline-primary rounded-circle'>
                                <i className='fab fa-google'></i>
                            </button>
                        </div>
                        <p className='small text-center'>
                            Don't have an account yet?
                            <Link to='/register'> Create account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
