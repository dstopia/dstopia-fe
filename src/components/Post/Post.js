import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default function Post() {
    
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState(0)
    
    // data will be fetched from url api in the future
    const data = [
        {
            id:1,
            username:'Thomas alfa Edison',
            img:'https://source.unsplash.com/random/128x128',
            timeSend: '11:06 AM Today',
            msg: 'likes comments and subscribe'
        },
        {
            id:2,
            username:'Thomas alfa Edison',
            img:'https://source.unsplash.com/random/128x128',
            timeSend: '11:06 AM Today',
            msg: 'likes comments and subscribe'
        },
        {
            id:3,
            username:'Thomas alfa Edison',
            img:'https://source.unsplash.com/random/128x128',
            timeSend: '11:06 AM Today',
            msg: 'likes comments and subscribe'
        }
    ]
    
    const handleLikes = () => {
        let like = likes +1
        setLikes(like)
    }
    useEffect(()=>{
        setComments(data)
    },[comments])

    return (
        <Router>
            <div className='card card-widget m-3'>
                <div className='card-header'>
                    <div className='user-block'>
                        <img
                            className='img-circle'
                            src='https://source.unsplash.com/random/128x128'
                            alt='Not found'
                        />
                        <span className='username'>
                            <Link to='/'>Jonathan Burke Jr.</Link>
                        </span>
                        <span className='description'>
                            Shared publicly - 7:30 PM Today
                        </span>
                    </div>
                    {/* /.user-block */}
                    <div className='card-tools'>
                        <button
                            type='button'
                            className='btn btn-tool'
                            title='Mark as read'>
                            <i className='far fa-circle' />
                        </button>
                        <button
                            type='button'
                            className='btn btn-tool'
                            data-card-widget='collapse'>
                            <i className='fas fa-minus' />
                        </button>
                        <button
                            type='button'
                            className='btn btn-tool'
                            data-card-widget='remove'>
                            <i className='fas fa-times' />
                        </button>
                    </div>
                    {/* /.card-tools */}
                </div>
                {/* /.card-header */}
                <div className='card-body'>
                    <img
                        className='img-fluid pad'
                        src='https://source.unsplash.com/random/1254x836'
                        alt='Not Found'
                    />
                    <p>
                        I took this photo this morning. What do you guys think?
                    </p>
                    <button type='button' className='btn btn-default btn-sm'>
                        <i className='fas fa-share' /> Share
                    </button>
                    <button type='button' className='btn btn-default btn-sm' onClick={handleLikes}>
                        <i className='far fa-thumbs-up' /> Like
                    </button>
                    <span className='float-right text-muted'>
                        {likes} likes - {comments.length} comments
                    </span>
                </div>
                {/* /.card-body */}
                <div className='card-footer card-comments'>
                   { comments && comments.map(comment => <PostComment comment={comment}/>)}
                    {/* /.card-comment */}
                </div>
                {/* /.card-footer */}
                <div className='card-footer'>
                    <form action='#' method='post'>
                        <img
                            className='img-fluid img-circle img-sm'
                            src='https://source.unsplash.com/random/128x128'
                            alt='Alt Text'
                        />
                        {/* .img-push is used to add margin to elements next to floating images */}
                        <div className='img-push'>
                            <input
                                type='text'
                                className='form-control form-control-sm'
                                placeholder='Press enter to post comment'
                            />
                        </div>
                    </form>
                </div>
                {/* /.card-footer */}
            </div>
        </Router>
    )
}

const PostComment = ({comment}) => {
    return (
        <div className='card-comment' key={comment.id}>
            {/* User image */}
            <img
                className='img-circle img-sm'
                src={comment.img}
                alt='Not found'
            />
            <div className='comment-text'>
                <span className='username'>
                    {comment.username}
                    <span className='text-muted float-right'>
                        {comment.timeSend}
                    </span>
                </span>
                {/* /.username */}
               {comment.msg}
            </div>
            {/* /.comment-text */}
        </div>
    )
}