/** Components */
import { useState, useEffect } from 'react'
import Map from '../../../components/Map/Map'
import Post from '../../../components/Post/Post'
import BASE_URL from '../../../config'
import axios from 'axios'
import ProfileCard from '../../../components/Profile/ProfileCard'
import AboutMeCard from '../../../components/Profile/AboutMeCard'
// import PostClosed from '../../../components/Post/PostClosed'

const Home = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/post`).then((res) => {
            setPost(res.data)
        })
    }, [post])

    return (
        <div className='container'>
            <div className='row'>
            {/*
                <div className='col-md-8'>
                    <div className='d-none d-md-block'>
                        <Map />
                    </div>
                    {post && post.map((pst) => <Post key={pst._id} post={pst} />)}
                </div>
                <div className='col-md-4 d-none d-md-block'>
                    <ProfileCard />
                    <AboutMeCard />
                </div>
            */}
                <div className='col'>
                    <div className='d-none d-md-block'>
                        <Map />
                    </div>
                    {post && post.map((pst) => <Post key={pst._id} post={pst} />)}
                </div>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='card shadow m-3'>
            <div className='card-header'>Header</div>
            <div className='card-body'>Body</div>
            <div className='card-footer'>Footer</div>
        </div>
    )
}
export default Home
