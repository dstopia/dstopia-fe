/** React dependencies */
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

/** Components */
import Map from '../../../components/Map/Map'
import Post from '../../../components/Post/Post'
import ProfileCard from '../../../components/Profile/ProfileCard'

/** Utils */
import BASE_URL from '../../../config'
import axios from 'axios'

const Home = () => {
    const [post, setPost] = useState([])
    const history = useHistory()

    // get auth state
    const isLoggedin = useSelector((state) => state.auth.value)
    // const isLoggedin = true
    useEffect(() => {
        // cek if user already logged in
        if (isLoggedin) {
            // get all post from db
            axios.get(`${BASE_URL}/post`).then((res) => {
                setPost(res.data)
            })
        } else {
            // redirect to login page
            history.push('/login')
        }
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 pb-5'>
                    <div className='d-none d-md-block'>
                        <Map />
                    </div>
                    {post &&
                        post.map((pst) => <Post key={pst._id} post={pst} />)}
                </div>
                <div className='col-md-4 d-none d-md-block'>
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default Home
