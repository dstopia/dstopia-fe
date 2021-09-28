import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import './App.css'

/** Pages */
import Home from '../Pages/Home/Home'
// import PageNotFound from '../Pages/404/PageNotFound'
import Gallery from '../Pages/Galery/Galery'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Journey from '../Pages/Journey/Journey'
import Community from '../Pages/Community/Community'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SettingPage from '../Pages/SettingPage/SettingPage'

/** Development Pages only */
import UserList from '../DevPages/UserList/UserList'

/** Components */
import NavbarLte from '../../components/Navbar/NavbarLte'
import Map from '../../components/Map/Map'
import SidebarLte from '../../components/Sidebar/SidebarLte'
import ChatsBody from '../../components/Chats/ChatsBody'
import Footer from '../../components/Footer/Footer'

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
                            <Footer />
                        </div>
                    </Route>
                    
                    {/* Map Page */}
                    <Route exact path='/map'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Map />
                        </div>
                    </Route>

                    {/* Journey Page */}
                    <Route path='/journey'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Journey />
                        </div>
                    </Route>

                    {/* Gallery Page */}
                    <Route path='/gallery'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Gallery />
                        </div>
                    </Route>

                    {/* Chats Page */}
                    <Route path='/chats'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper position-relative'>
                            <ChatsBody />
                        </div>
                    </Route>

                    {/* Community Page */}
                    <Route path='/community'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Community />
                        </div>
                    </Route>
                    
                    {/* Dashboard Page */}
                    <Route path='/dashboard'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Dashboard />
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
