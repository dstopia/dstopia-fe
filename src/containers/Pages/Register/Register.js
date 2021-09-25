import { useState } from 'react'
import axios from 'axios'
import BASE_URL from '../../../config'

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
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
        <div className='container'>
            <form
                className='m-5 p-3 shadow border rounded'
                onSubmit={handleSubmit}>
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
                <div className='mb-3 form-check'>
                    <input
                        type='checkbox'
                        className='form-check-input'
                        id='exampleCheck1'
                    />
                    <label className='form-check-label' htmlFor='exampleCheck1'>
                        Check me out
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register
