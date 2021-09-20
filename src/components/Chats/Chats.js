import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Chats() {
    return (
        <Router>
            <div className='card direct-chat direct-chat-primary m-3'>
                <div
                    className='card-header ui-sortable-handle'
                    style={{ cursor: 'move' }}>
                    <h3 className='card-title'>Direct Chat</h3>
                    <div className='card-tools'>
                        <span
                            title='3 New Messages'
                            className='badge badge-primary'>
                            3
                        </span>
                        <button
                            type='button'
                            className='btn btn-tool'
                            data-card-widget='collapse'>
                            <i className='fas fa-minus' />
                        </button>
                        <button
                            type='button'
                            className='btn btn-tool'
                            title='Contacts'
                            data-widget='chat-pane-toggle'>
                            <i className='fas fa-comments' />
                        </button>
                        <button
                            type='button'
                            className='btn btn-tool'
                            data-card-widget='remove'>
                            <i className='fas fa-times' />
                        </button>
                    </div>
                </div>
                {/* /.card-header */}
                <div className='card-body'>
                    {/* Conversations are loaded here */}
                    <div className='direct-chat-messages'>
                        {/* Message. Default to the left */}
                        <div className='direct-chat-msg'>
                            <div className='direct-chat-infos clearfix'>
                                <span className='direct-chat-name float-left'>
                                    Alexander Pierce
                                </span>
                                <span className='direct-chat-timestamp float-right'>
                                    23 Jan 2:00 pm
                                </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                                className='direct-chat-img'
                                src='https://source.unsplash.com/random/128x128'
                                alt='Not Found'
                            />
                            {/* /.direct-chat-img */}
                            <div className='direct-chat-text'>
                                Is this template really for free? That's
                                unbelievable!
                            </div>
                            {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className='direct-chat-msg right'>
                            <div className='direct-chat-infos clearfix'>
                                <span className='direct-chat-name float-right'>
                                    Sarah Bullock
                                </span>
                                <span className='direct-chat-timestamp float-left'>
                                    23 Jan 2:05 pm
                                </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                                className='direct-chat-img'
                                src='https://source.unsplash.com/random/128x128'
                                alt='Not Found'
                            />
                            {/* /.direct-chat-img */}
                            <div className='direct-chat-text'>
                                You better believe it!
                            </div>
                            {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message. Default to the left */}
                        <div className='direct-chat-msg'>
                            <div className='direct-chat-infos clearfix'>
                                <span className='direct-chat-name float-left'>
                                    Alexander Pierce
                                </span>
                                <span className='direct-chat-timestamp float-right'>
                                    23 Jan 5:37 pm
                                </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                                className='direct-chat-img'
                                src='https://source.unsplash.com/random/128x128'
                                alt='Not Found'
                            />
                            {/* /.direct-chat-img */}
                            <div className='direct-chat-text'>
                                Working with AdminLTE on a great new app! Wanna
                                join?
                            </div>
                            {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                        {/* Message to the right */}
                        <div className='direct-chat-msg right'>
                            <div className='direct-chat-infos clearfix'>
                                <span className='direct-chat-name float-right'>
                                    Sarah Bullock
                                </span>
                                <span className='direct-chat-timestamp float-left'>
                                    23 Jan 6:10 pm
                                </span>
                            </div>
                            {/* /.direct-chat-infos */}
                            <img
                                className='direct-chat-img'
                                src='https://source.unsplash.com/random/128x128'
                                alt='Not Found'
                            />
                            {/* /.direct-chat-img */}
                            <div className='direct-chat-text'>
                                I would love to.
                            </div>
                            {/* /.direct-chat-text */}
                        </div>
                        {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className='direct-chat-contacts'>
                        <ul className='contacts-list'>
                            <li>
                                <Link to='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            Count Dracula
                                            <small className='contacts-list-date float-right'>
                                                2/28/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            How have you been? I was...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                            <li>
                                <Link to='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            Sarah Doe
                                            <small className='contacts-list-date float-right'>
                                                2/23/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            I will be waiting for...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                            <li>
                                <Link to='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            Nadia Jolie
                                            <small className='contacts-list-date float-right'>
                                                2/20/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            I'll call you back at...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                            <li>
                                <Link href='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            Nora S. Vans
                                            <small className='contacts-list-date float-right'>
                                                2/10/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            Where is your new...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                            <li>
                                <Link to='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            John K.
                                            <small className='contacts-list-date float-right'>
                                                1/27/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            Can I take a look at...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                            <li>
                                <Link to='/'>
                                    <img
                                        className='contacts-list-img'
                                        src='https://source.unsplash.com/random/128x128'
                                        alt='User Avatar'
                                    />
                                    <div className='contacts-list-info'>
                                        <span className='contacts-list-name'>
                                            Kenneth M.
                                            <small className='contacts-list-date float-right'>
                                                1/4/2015
                                            </small>
                                        </span>
                                        <span className='contacts-list-msg'>
                                            Never mind I found...
                                        </span>
                                    </div>
                                    {/* /.contacts-list-info */}
                                </Link>
                            </li>
                            {/* End Contact Item */}
                        </ul>
                        {/* /.contacts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                </div>
                {/* /.card-body */}
                <div className='card-footer'>
                    <form action='#' method='post'>
                        <div className='input-group'>
                            <input
                                type='text'
                                name='message'
                                placeholder='Type Message ...'
                                className='form-control'
                            />
                            <span className='input-group-append'>
                                <button
                                    type='button'
                                    className='btn btn-primary'>
                                    Send
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                {/* /.card-footer*/}
            </div>
        </Router>
    )
}
