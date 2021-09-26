import React from 'react'
import Photos from '../Photos/Photos'
import './ListPhoto.css'

export default function ListPhotos() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Photos url={'https://source.unsplash.com/WLUHO9A_xik/2000x1100'}/>
                    </div>
                    <div className="col-sm">
                        <Photos url={'https://source.unsplash.com/WLUHO9A_xik/1600x900'}/>
                    </div>
                    <div className="col-sm">
                        <Photos url={'https://source.unsplash.com/WLUHO9A_xik/1600x900'}/>
                    </div>
                    <div className="col-sm">
                        <Photos url={'https://source.unsplash.com/WLUHO9A_xik/1600x900'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}