import { useState } from 'react'
import axios from 'axios'
import BASE_URL from '../../../config'

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setInput((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Save user to server
        axios
            .post(`${BASE_URL}/user`, input)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='container '>
            <form
                className='m-5 p-3 shadow border rounded'
                onSubmit={handleSubmit}>
                <h4 className='text-center'>Register form</h4>
                <hr />

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>
                                Username
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='username'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Email address
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                onChange={handleChange}
                                aria-describedby='emailHelp'
                            />
                            <div id='emailHelp' className='form-text'>
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                htmlFor='confirm_password'
                                className='form-label'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='confirm_password'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <label htmlFor='birthday' className='form-label'>
                                Birthday
                            </label>
                            <input
                                type='date'
                                className='form-control'
                                id='birthday'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>
                                Gender
                            </label>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='gender'
                                            id='exampleRadios1'
                                            defaultValue='option1'
                                            defaultChecked
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor='exampleRadios1'>
                                            Male
                                        </label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='gender'
                                            id='exampleRadios2'
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor='exampleRadios2'>
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='gender'
                                            id='exampleRadios3'
                                            defaultValue='option3'
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor='exampleRadios3'>
                                            Custom
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                htmlFor='confirm_password'
                                className='form-label'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='confirm_password'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary w-50'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
