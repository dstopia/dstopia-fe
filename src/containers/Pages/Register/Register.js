import { useState } from 'react'
import axios from 'axios'
import BASE_URL from '../../../config'
import { Link } from 'react-router-dom'

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState([])

    const handleChange = (e) => {
        const { id, value } = e.target
        setInput((prevState) => ({
            ...prevState,
            [id]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setisPending(true)

        // Save user to server
        axios
            .post(`${BASE_URL}/user`, input)
            .then((res) => {
                setisPending(false)
                setError([])
                console.log(res.data)
            })
            .catch((err) => {
                setisPending(false)
                setError(err.response.data.error)
            })
    }

    return (
        <div className='container '>
            <form
                className='m-2 m-lg-5 p-3 shadow border rounded'
                onSubmit={handleSubmit}>
                <h4 className='text-center'>Register form</h4>
                <hr />
                {error.length > 0 && (
                    <div className='error-wrapper'>
                        <div className='alert alert-danger' role='alert'>
                            <ul>
                                {error.map((err, i) => (
                                    <li key={i}>{err}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                    </div>
                )}

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
                                required
                            />
                            <div id='emailHelp' className='form-text'>
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col'>
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
                                        required
                                    />
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    {isPending ? (
                        <button
                            className='btn btn-primary w-50 mb-3'
                            type='button'
                            disabled>
                            Submiting
                            <span
                                className='spinner-border spinner-border-sm'
                                role='status'
                                aria-hidden='true'
                            />
                        </button>
                    ) : (
                        <button
                            type='submit'
                            className='btn btn-primary w-50 mb-3'>
                            Submit
                        </button>
                    )}
                    <p>
                        Have an account? <Link to='/login'>Log in</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register
