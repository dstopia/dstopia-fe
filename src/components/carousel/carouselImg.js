import React from 'react'

export default function carousel(props) {
    return (
        <div>
            <img
                className='d-block w-100 img-responsive'
                src={props.url}
                alt='name'
            />
        </div>
    )
}
