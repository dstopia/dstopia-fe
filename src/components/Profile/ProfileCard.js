import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../../config'

/** Redux */
import { useSelector } from 'react-redux' // access global state
// import { useDispatch } from 'react-redux' // edit global state

const ProfileCard = () => {
    
    const user = useSelector((state)=> state.user.value)
    /*
    const [user, setUser] = useState({})

    useEffect(() => {
        axios
            .get(`${BASE_URL}/user/614ed4348786e861772204b3`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    */
    return (
        <div className='mx-3 pt-3'>
            {/* Profile Image */}
            <div className='card card-primary card-outline'>
                <div className='card-body box-profile'>
                    <div className='text-center'>
                        <img
                            className='profile-user-img img-fluid img-circle'
                            src='https://source.unsplash.com/random/128x128'
                            alt='User profile'
                        />
                    </div>
                    <h3 className='profile-username text-center'>
                        Nina Mcintire
                    </h3>
                    <p className='text-muted text-center'>Software Engineer</p>
                    <ul className='list-group list-group-unbordered mb-3'>
                        <li className='list-group-item'>
                            <b>Followers</b>
                            <Link to='#' className='float-right'>
                                1,322
                            </Link>
                        </li>
                        <li className='list-group-item'>
                            <b>Following</b>
                            <Link to='#' className='float-right'>
                                543
                            </Link>
                        </li>
                        <li className='list-group-item'>
                            <b>Posts</b>
                            <Link to='#' className='float-right'>
                                13,287
                            </Link>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-evenly '>
                        <Link
                            to='#'
                            className='btn btn-primary flex-grow-1 me-3 btn-sm'>
                            <b>Follow</b>
                        </Link>
                        <Link to='#' className='btn btn-primary btn-sm'>
                            <i className='fas fa-bars'></i>
                        </Link>
                    </div>
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </div>
    )
}

export default ProfileCard
