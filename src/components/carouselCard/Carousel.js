import React from 'react'
import Img from '../carousel/carouselImg'

export default function CarouselCard(props) {
    return (
        <div className='container-fluid p-0'>
            <div
                id='carouselExampleIndicators'
                className='carousel slide'
                data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='0'
                        className='active'
                        aria-current='true'
                        aria-label='Slide 1'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='1'
                        aria-label='Slide 2'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='2'
                        aria-label='Slide 3'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='3'
                        aria-label='Slide 4'></button>
                    <button
                        type='button'
                        data-bs-target='#carouselExampleIndicators'
                        data-bs-slide-to='4'
                        aria-label='Slide 5'></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <Img
                            url={'https://source.unsplash.com/600x150/?general'}
                        />
                        <div className='carousel-caption d-none d-md-block'>
                            <h5 className=''>First slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <Img
                            url={'https://source.unsplash.com/600x150/?nature'}
                        />
                        <div className='carousel-caption d-none d-md-block'>
                            <h5>Second slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <Img
                            url={
                                'https://source.unsplash.com/600x150/?historical'
                            }
                        />
                        <div className='carousel-caption d-none d-md-block'>
                            <h5>Third slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <Img
                            url={
                                'https://source.unsplash.com/600x150/?shopping'
                            }
                        />
                        <div className='carousel-caption d-none d-md-block'>
                            <h5>Third slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <Img
                            url={
                                'https://source.unsplash.com/600x150/?culinary'
                            }
                        />
                        <div className='carousel-caption d-none d-md-block'>
                            <h5>Third slide label</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='prev'>
                    <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide='next'>
                    <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}
