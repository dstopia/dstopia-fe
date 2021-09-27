import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../functions/hooks/useFetch'
import BASE_URL from '../../../config'
const UserList = () => {

    return (
        <div className='container'>
            <Link to='/' className='btn btn-info'>
                Home
            </Link>
            <Link to='/register' className='btn btn-info'>
                Register
            </Link>
            <div className='row'>
                <div className='col-md-4 col-lg-3 m-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <p>Card header</p>
                        </div>
                        <div className='card-body'>
                            <p>Card body</p>
                        </div>
                        <div className='card-footer'>
                            <p>Card footer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList
