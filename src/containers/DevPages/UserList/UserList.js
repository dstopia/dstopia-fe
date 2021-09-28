import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import BASE_URL from '../../../config'
import ProfileCard from '../../../components/Profile/ProfileCard'
const UserList = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <Link to='/' className='btn btn-primary m-3 d-block'>
                        Home
                    </Link>
                </div>
                <div className='col text-center'>
                    <Link to='/register' className='btn btn-primary m-3 d-block'>
                        Register
                    </Link>
                </div>
            </div>
            <div className='row'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
const Card = () => {
    return (
        <div className='col-md-6 col-lg-4 col-xl-3'>
            <ProfileCard />
        </div>
    )
}

export default UserList
