import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

/** Components */
import ChatsBody from '../../components/Chats/ChatsBody'
import Map from '../../components/Map/Map'
import Post from '../../components/Post/Post'
import PostClosed from '../../components/Post/PostClosed'
import NavbarLte from '../../components/Navbar/NavbarLte'

function Home(props) {
    console.log(props)
    return (
        <Router>
            <NavbarLte />
            <Route path='/' exact component={Lobby} />
        </Router>
    )
}

function Lobby() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <Map />
                    <ChatsBody />
                </div>
                <div className='col-lg-5'>
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
        user: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        greet: () => dispatch({ type: 'GREET_USER' }),
    }
}
export default connect(mapStateToProos, mapDispatchToProps)(Home)
