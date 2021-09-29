import React from 'react'
import Photos from '../Photos/Photos'

export default function ListPhotos() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Photos url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                    </div>
                    <div className="col">
                        <Photos url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                    </div>
                    <div className="col">
                        <Photos url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                    </div>
                    <div className="col">
                        <Photos url={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}