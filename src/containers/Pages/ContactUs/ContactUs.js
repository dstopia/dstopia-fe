import React, { Fragment } from 'react'
import HeaderImage from '../../../components/Header/HeaderImage'
import ListPhoto from '../../../components/ListPhotos/ListPhoto'
import ContactForm from '../../../components/Forms/ContactForm'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <Fragment>
            <section className='content-header'>
                <div className='container-fluid head d-none d-xl-block'>
                    <div className='row'>
                        <div className='col-lg header'>
                            <HeaderImage />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg foto'>
                            <ListPhoto />
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-main'>
                <div className='container-fluid main'>
                    <div className='row'>
                        <div className='col-lg'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
