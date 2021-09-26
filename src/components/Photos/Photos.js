import React from 'react'

export default function Photos(props) {
    return (
        <div>
            <div className='card mb-2 mt-3 shadow'>
            <img
                className='card-img-top '
                src={props.url}
                alt='not found 3'
            />
            </div>
        </div>
    )
}