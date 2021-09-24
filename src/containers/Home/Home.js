import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

/** Components */
import ChatsBody from '../../components/Chats/ChatsBody'
import Journey from '../Pages/Journey/Journey'
import Map from '../../components/Map/Map'
import Post from '../../components/Post/Post'
import PostClosed from '../../components/Post/PostClosed'
import NavbarLte from '../../components/Navbar/NavbarLte'
import Gallery from '../Pages/Galery/Galery'
import SidebarLte from '../../components/Sidebar/SidebarLte'
import PageNotFound from '../Pages/404/PageNotFound'
import Login from '../Pages/Login/Login'

function Home() {
    return (
        <Router>
            <Switch>
                <div className='wrapper'>
                    {/* Loader */}
                    <div className='preloader flex-column justify-content-center align-items-center'>
                        <div
                            className='spinner-border text-primary'
                            role='status'>
                            <span className='visually-hidden'></span>
                        </div>
                    </div>

                    {/* Login route */}
                    <Route path='/login' exact component={Login} />

                    {/* Pages router */}
                    <Route exact path='/'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Lobby />
                        </div>
                    </Route>
                    <Route exact path='/journey'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Journey />
                        </div>
                    </Route>
                    <Route exact path='/gallery'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Gallery />
                        </div>
                    </Route>
                    <Route exact path='/chats'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <ChatsBody />
                        </div>
                    </Route>

                    {/* Router not found */}
                    <Route component={PageNotFound} />
                </div>
            </Switch>
        </Router>
    )
}

function Lobby() {
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
