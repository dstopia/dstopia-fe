import React from "react";
import GridPhotos from '../../../components/GridPhotos/GridPhotos'

export default function gallery() {
    return (
        <div className="main content">
            <div className="container-fluid">
                <h1 className="mt-3 text-center">Gallery Page</h1>
                <div className="row">
                    <div className="col">
                        <GridPhotos/>
                    </div>
                </div>
            </div>
        </div>
    )
}