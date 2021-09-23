import { useState, useEffect, useMemo } from 'react'

import Chats from './Chats.js'
import ContactsList from './ContactsList.js'

// data will be fetched from api in the future

export default function ChatsBody() {
    const [chats, setChats] = useState([])

    const chatsData = useMemo(() => {
        const data = [
            {
                id: 1,
                username: 'Alexander',
                msg: 'Hello everyone, how are you doing?',
                timeSend: '12:17 AM Today',
                position: 'left',
                thumb_img: 'https://source.unsplash.com/random/128x128',
            },
            {
                id: 2,
                username: 'Lorem Ispum',
                msg: 'Hello everyone, how are you doing?',
                timeSend: '12:30 AM Today',
                position: 'right',
                thumb_img: 'https://source.unsplash.com/random/128x128',
            },
        ]
        return data
    }, [])

    useEffect(() => {
        setChats(chatsData)
    }, [chatsData])

    return (
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
                    {chats && chats.map((chat) => <Chats key={chat.id} chat={chat} />)}
                </div>
                {/*/.direct-chat-messages*/}
                {/* Contacts are loaded here */}
                <div className='direct-chat-contacts'>
                    <ul className='contacts-list'>
                        <ContactsList />
                        <ContactsList />
                        <ContactsList />
                        <ContactsList />
                        <ContactsList />
                        <ContactsList />
                        <ContactsList />
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
                            <button type='button' className='btn btn-primary'>
                                Send
                            </button>
                        </span>
                    </div>
                </form>
            </div>
            {/* /.card-footer*/}
        </div>
    )
}
