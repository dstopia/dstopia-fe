import React from "react";
import HeaderImage from "../../../components/Header/header_image"
import ListPhoto from "../../../components/ListPhotos/ListPhoto"
import ContactForm from "../../../components/Forms/contactForm"
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid head">
                    <div className="row">
                        <div className="col-lg header">
                            <HeaderImage/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg foto">
                            <ListPhoto/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-main" >
                <div className="container-fluid main">
                    <div className="row">
                        <div className="col-lg">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}