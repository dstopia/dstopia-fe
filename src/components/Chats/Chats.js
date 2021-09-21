
function Chats(props) {
    return (
        /* Message. Default to the left */
        <div className={
            props.position === 'right' ?
            'direct-chat-msg right':
            'direct-chat-msg'
            }>
            <div className='direct-chat-infos clearfix'>
                <span className={
                    props.position === 'right' ?
                    'direct-chat-name float-right':
                    'direct-chat-name float-left'
                    }>
                    Alexander Pierce
                </span>
                <span className={
                    props.position === 'right' ?
                   'direct-chat-timestamp float-left':
                   'direct-chat-timestamp float-right'
                }>
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
        /* /.direct-chat-msg */
    )
}

export default Chats