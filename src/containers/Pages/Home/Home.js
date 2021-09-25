/** Components */
import { useState, useEffect } from 'react'
import Map from '../../../components/Map/Map'
import Post from '../../../components/Post/Post'
import BASE_URL from '../../../config'
import axios from 'axios'
// import PostClosed from '../../../components/Post/PostClosed'

const Home = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/post`)
        .then((res)=>{
            setPost(res.data)
        })
    }, [post])
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-7'>
                    <Map />
                </div>
                <div className='col-md-5'>
                    {post &&
                        post.map((pst) => <Post key={pst._id} post={pst} />)}
                </div>
            </div>
        </div>
    )
}

export default Home
