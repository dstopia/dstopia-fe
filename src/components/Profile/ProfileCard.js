/** React dependencies */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' // access global state

const ProfileCard = () => {
    const [user, setUser] = useState({})

    // get user from global state
    const currentUser = useSelector((state) => state.user.value)

    useEffect(() => {
        // cek if user exists
        if (currentUser._id !== '') {
            setUser(currentUser)
        }
    }, [])

    return (
        user.username !== undefined && (
            <div className='mx-3 pt-3'>
                {/* Profile Image */}
                <div className='card card-primary card-outline'>
                    <div className='card-body box-profile'>
                        <div className='text-center'>
                            <img
                                className='profile-user-img img-fluid img-circle'
                                src={user.img_thumb}
                                alt='User profile'
                            />
                        </div>
                        <h3 className='profile-username text-center'>
                            {user.username}
                        </h3>
                        <p className='text-muted text-center'>{user.desc}</p>
                        <ul className='list-group list-group-unbordered mb-3'>
                            <li className='list-group-item'>
                                <b>Followers</b>
                                <Link to='#' className='float-right'>
                                    {user.followers.length}
                                </Link>
                            </li>
                            <li className='list-group-item'>
                                <b>Following</b>
                                <Link to='#' className='float-right'>
                                    {user.following.length}
                                </Link>
                            </li>
                            <li className='list-group-item'>
                                <b>Posts</b>
                                <Link to='#' className='float-right'>
                                    {user.posts.length}
                                </Link>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-evenly '>
                            <Link
                                to='#'
                                className='btn btn-primary flex-grow-1 me-3 btn-sm'>
                                <b>Profile</b>
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
    )
}

export default ProfileCard
