import React from 'react'
import CategoryImg from '../categoryImg/CategoryImg'
import './CategoryCard.css'

export default function CategoryCard(props) {
    return (
        <div className='container-fluid mt-4'>
            <div className='row d-flex justify-content-center'>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?general'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>General</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?nature'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Nature</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?education'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Education</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?historical'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Historical</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?culinary'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Culinary</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?shopping'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Shopping</div>
                    </div>
                </div>
                <div className='col category btn'>
                    <CategoryImg
                        url={'https://source.unsplash.com/200x75/?culture'}
                    />
                    <div className='overlay'>
                        <div className='text fw-bold'>Culture</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
