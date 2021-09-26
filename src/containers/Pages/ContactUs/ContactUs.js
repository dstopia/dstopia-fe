import React from "react";
import HeaderImage from "../../../components/header/header_image";
import ListPhoto from "../../../components/ListPhotos/ListPhoto"
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid main">
                    <div className="row">
                        <div className="col-lg header">
                            <HeaderImage/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg">
                            <ListPhoto/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}