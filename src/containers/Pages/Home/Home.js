/** Components */
import { useState, useEffect, useMemo } from 'react'
import Map from '../../../components/Map/Map'
import Post from '../../../components/Post/Post'
// import PostClosed from '../../../components/Post/PostClosed'

const Home = () => {
    const [post, setPost] = useState([])

    const getPost = useMemo(() => {
        const data = [
            {
                id: 'dasldkalskd',
                username: 'Lorem ispum',
                timeSend: '19:21 AM Today',
                isLiked: false,
                caption:
                    'I took this photo this morning. What do you guys think?',
                comment: [
                    {
                        id: 1,
                        username: 'Thomas alfa Edison',
                        img: 'https://source.unsplash.com/random/128x128',
                        timeSend: '11:06 AM Today',
                        msg: 'likes comments and subscribe',
                        isLiked: false,
                    },
                    {
                        id: 2,
                        username: 'Thomas alfa Edison',
                        img: 'https://source.unsplash.com/random/128x128',
                        timeSend: '11:06 AM Today',
                        msg: 'likes comments and subscribe',
                        isLiked: false,
                    },
                    {
                        id: 3,
                        username: 'Thomas alfa Edison',
                        img: 'https://source.unsplash.com/random/128x128',
                        timeSend: '11:06 AM Today',
                        msg: 'likes comments and subscribe',
                        isLiked: false,
                    },
                ],
            },
            {
                id: 'hdjshdjshdj',
                username: 'Alexander',
                timeSend: '19:21 AM Today',
                isLiked: false,
                caption:
                    'I took this photo this evenig. What do you guys think?',
                comment: [
                    {
                        id: 2,
                        username: 'Thomas alfa Edison',
                        img: 'https://source.unsplash.com/random/128x128',
                        timeSend: '11:06 AM Today',
                        msg: 'likes comments and subscribe',
                        isLiked: false,
                    },
                    {
                        id: 3,
                        username: 'Thomas alfa Edison',
                        img: 'https://source.unsplash.com/random/128x128',
                        timeSend: '11:06 AM Today',
                        msg: 'likes comments and subscribe',
                        isLiked: false,
                    },
                ],
            },
        ]
        return data
    }, [])

    useEffect(() => {
        setPost(getPost)
    }, [getPost])

    console.log({ post })
    return (
        <div className='row'>
            <div className='col-lg-7'>
                <Map />
                <div className='card m-3'>
                    <div className='card-header'>title</div>
                    <div className='card-body'>Something here</div>
                    <div className='card-footer'>footer</div>
                </div>
                <div className='card m-3'>
                    <div className='card-header'>title</div>
                    <div className='card-body'>Something here</div>
                    <div className='card-footer'>footer</div>
                </div>
                <div className='card m-3'>
                    <div className='card-header'>title</div>
                    <div className='card-body'>Something here</div>
                    <div className='card-footer'>footer</div>
                </div>
            </div>
            <div className='col-lg-5 overflow-auto'>
                <div className='post-wrapper'>
                    {post &&
                        post.map((pst) => <Post key={pst.id} post={pst} />)}
                </div>
            </div>
        </div>
    )
}

export default Home
