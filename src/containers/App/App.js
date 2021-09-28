import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

/** Pages */
import Home from '../Pages/Home/Home'
// import PageNotFound from '../Pages/404/PageNotFound'
import Gallery from '../Pages/Galery/Galery'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Journey from '../Pages/Journey/Journey'
import Community from '../Pages/Community/Community'
import SettingPage from '../Pages/SettingPage/SettingPage'

/** Development Pages only */
import UserList from '../DevPages/UserList/UserList'

/** Components */
import NavbarLte from '../../components/Navbar/NavbarLte'
import Map from '../../components/Map/Map'
import SidebarLte from '../../components/Sidebar/SidebarLte'
import SidebarRight from '../../components/Sidebar/SidebarRight'
import ChatsBody from '../../components/Chats/ChatsBody'

const App = () => {
    return (
        <Router>
            <Switch>
                <div className='wrapper'>
                    <Loader />
                    {/* Register Page */}
                    <Route path='/register' component={Register} />

                    {/* Login Page */}
                    <Route path='/login' component={Login} />

                    {/* User List Page */}
                    <Route path='/user-list' component={UserList} />

                    {/* Home Page */}
                    <Route exact path='/'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Home />
                            <SidebarRight />
                        </div>
                    </Route>
                    {/* Map Page */}
                    <Route exact path='/map'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Map />
                            <SidebarRight />
                        </div>
                    </Route>

                    {/* Journey Page */}
                    <Route path='/journey'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Journey />
                            <SidebarRight />
                        </div>
                    </Route>

                    {/* Gallery Page */}
                    <Route path='/gallery'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Gallery />
                            <SidebarRight />
                        </div>
                    </Route>

                    {/* Chats Page */}
                    <Route path='/chats'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <ChatsBody />
                            <SidebarRight />
                        </div>
                    </Route>

                    {/* Community Page */}
                    <Route path='/community'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Community />
                            <SidebarRight />
                        </div>
                    </Route>

                    {/* Router not found */}
                    {/* <Route path='/*' exact component={PageNotFound} /> */}

                    {/* Setting Page */}
                    <Route path='/setting' component={SettingPage} />
                </div>
            </Switch>
        </Router>
    )
}

const Loader = () => {
    return (
        <div className='preloader flex-column justify-content-center align-items-center'>
            <div className='spinner-border text-primary' role='status'>
                <span className='visually-hidden'></span>
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
export default connect(mapStateToProos, mapDispatchToProps)(App)
