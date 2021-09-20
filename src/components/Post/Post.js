import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Post() {
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
                            <Link href='/'>Jonathan Burke Jr.</Link>
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
                    <button type='button' className='btn btn-default btn-sm'>
                        <i className='far fa-thumbs-up' /> Like
                    </button>
                    <span className='float-right text-muted'>
                        127 likes - 3 comments
                    </span>
                </div>
                {/* /.card-body */}
                <div className='card-footer card-comments'>
                    <div className='card-comment'>
                        {/* User image */}
                        <img
                            className='img-circle img-sm'
                            src='https://source.unsplash.com/random/128x128'
                            alt='Nout Found'
                        />
                        <div className='comment-text'>
                            <span className='username'>
                                Maria Gonzales
                                <span className='text-muted float-right'>
                                    8:03 PM Today
                                </span>
                            </span>
                            {/* /.username */}
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </div>
                        {/* /.comment-text */}
                    </div>
                    {/* /.card-comment */}
                    <div className='card-comment'>
                        {/* User image */}
                        <img
                            className='img-circle img-sm'
                            src='https://source.unsplash.com/random/128x128'
                            alt='Not found'
                        />
                        <div className='comment-text'>
                            <span className='username'>
                                Luna Stark
                                <span className='text-muted float-right'>
                                    8:03 PM Today
                                </span>
                            </span>
                            {/* /.username */}
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </div>
                        {/* /.comment-text */}
                    </div>
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
