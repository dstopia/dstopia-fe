import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return (
        <div className='main-content m-5'>
            <div className='container contact-form pt-3 pe-2 pb-3 shadow mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <h1 className='secondary ps-5 ms-lg-5 pt-2'>
                            Get More Info
                        </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='First Name'
                        />
                    </div>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Company'
                        />
                    </div>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='number'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Phone'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='number'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Your Budget'
                        />
                    </div>
                    <div className='col contact ms-2 mt-5'>
                        <input
                            type='email'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Email Adress'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col contact ms-2 mt-5'>
                        <label
                            htmlFor='exampleFormControlTextarea1'
                            className='form-label'>
                            Message
                        </label>
                        <textarea
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            rows={3}
                            defaultValue={''}
                        />
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col button'>
                        <button className='btn btn-primary' type='button'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
