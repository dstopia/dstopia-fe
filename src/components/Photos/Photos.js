import React from 'react'

export default function Photos() {
    return (
        <div className='card card-success'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 col-xl-4'>
                        <Photo />
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-4'>
                        <Photo />
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-4'>
                        <Photo />
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-4'>
                        <Photo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Photo() {
    return (
        <div className='card mb-2'>
            <img
                className='card-img-top'
                src='https://adminlte.io/themes/v3/dist/img/photo3.jpg'
                alt='not found 3'
            />
            <div className='card-img-overlay'>
                <h5 className='card-title text-primary'>Card Title</h5>
                <p className='card-text pb-1 pt-1 text-white'>
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.
                </p>
                <a href='/' className='text-primary'>
                    Last update 3 days ago
                </a>
            </div>
        </div>
    )
}
