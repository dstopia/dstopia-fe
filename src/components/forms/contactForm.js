import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return (
        <div className='main-content m-5'>
            <div class='container contact-form pt-3 pe-2 pb-3 shadow mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <h1 className='secondary ps-5 ms-lg-5 pt-2'>
                            Get More Info
                        </h1>
                    </div>
                </div>
                <div class='row'>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='First Name'
                        />
                    </div>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <div class='row'>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='text'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Company'
                        />
                    </div>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='number'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Phone'
                        />
                    </div>
                </div>
                <div class='row'>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='number'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Your Budget'
                        />
                    </div>
                    <div class='col contact ms-2 mt-5'>
                        <input
                            type='email'
                            class='form-control'
                            id='exampleFormControlInput1'
                            placeholder='Email Adress'
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col contact ms-2 mt-5'>
                        <label
                            for='exampleFormControlTextarea1'
                            class='form-label'>
                            Message
                        </label>
                        <textarea
                            class='form-control'
                            id='exampleFormControlTextarea1'
                            rows='3'></textarea>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col button'>
                        <button class='btn btn-primary' type='button'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
