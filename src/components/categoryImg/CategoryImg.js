import React from 'react'

export default function CategoryImg(props) {
    return (
        <div>
            <img
                className='rounded-pill btn shadow p-0'
                src={props.url}
                alt='name'
            />
        </div>
    )
}
