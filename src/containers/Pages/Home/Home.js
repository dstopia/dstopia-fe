
/** Components */
import Map from '../../../components/Map/Map'
import Post from '../../../components/Post/Post'
import PostClosed from '../../../components/Post/PostClosed'

const  Home = () => {
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
                    <Post />
                    <Post />
                    <Post />
                    <PostClosed />
                    <PostClosed />
                    <PostClosed />
                </div>
            </div>
        </div>
    )
}

export default Home
