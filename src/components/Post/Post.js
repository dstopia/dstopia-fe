import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Post({ post }) {
    const [likes, setLikes] = useState(post.isLiked)
    const [likeCount, setLikeCount] = useState(0)

    const handleLikes = () => {
        if (likes) {
            setLikes(false)
            setLikeCount(0)
        } else {
            setLikes(true)
            setLikeCount(1)
        }
    }
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
                            <Link to='/'>{post.username}</Link>
                        </span>
                        <span className='description'>
                            Shared publicly - {post.timeSend}
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
                    <p>{post.caption}</p>
                    <button
                        type='button'
                        className='btn btn-default btn-sm'
                        onClick={handleLikes}>
                        {likes ? (
                            <i className='fas fa-heart' />
                        ) : (
                            <i className='far fa-heart' />
                        )}
                    </button>
                    <button
                        type='button'
                        className='btn btn-default btn-sm'
                        data-bs-toggle='collapse'
                        data-bs-target={`#${post.id}`}
                        aria-expanded='false'
                        aria-controls='commentArea'>
                        <i className='far fa-comment' />
                    </button>
                    <button type='button' className='btn btn-default btn-sm'>
                        <i className='fas fa-share' />
                    </button>

                    <span className='float-right text-muted'>
                        {likeCount} likes - {post.comment.length} comments
                    </span>
                </div>
                {/* /.card-body */}
                <div
                    className='card-footer card-comments collapse'
                    id={post.id}>
                    {post.comment &&
                        post.comment.map((comment) => (
                            <PostComment key={comment.id} comment={comment} />
                        ))}
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

const PostComment = ({ comment }) => {
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
