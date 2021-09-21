import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

/** Components */
// import Navbar from '../../components/Navbar/Navbar'
import ChatsBody from '../../components/Chats/ChatsBody'
import Journey from '../Pages/Journey/Journey'
import Map from '../../components/Map/Map'
import Post from '../../components/Post/Post'
import PostClosed from '../../components/Post/PostClosed'
import NavbarLte from '../../components/Navbar/NavbarLte'
// import Category from '../Pages/Category/Category'

function Home() {
    return (
        <Router>
            {/* <Navbar /> */}
            <NavbarLte />
            <Route path='/' exact component={Lobby} />
            <Route path='/journey' component={Journey} />
            <Route path='/chats' component={ChatsBody} />
        </Router>
    )
}

function Lobby() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Map />
                    <ChatsBody />
                </div>
                <div className='col-6'>
                    <PostClosed />
                    <PostClosed />
                    <PostClosed />
                    <Post />
                </div>
            </div>
        </div>
    )
}

const mapStateToProos = (state) => {
    // state global
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        greet: () => dispatch({ type: 'GREET_USER' }),
    }
}
export default connect(mapStateToProos, mapDispatchToProps)(Home)
