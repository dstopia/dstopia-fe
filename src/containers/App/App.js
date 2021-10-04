/** React dependencies */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useRouteMatch } from 'react-router-dom'

/** Utils */
import axios from 'axios'

/** Pages */
import Home from '../Pages/Home/Home'
import PageNotFound from '../Pages/404/PageNotFound'
import Gallery from '../Pages/Galery/Galery'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Journey from '../Pages/Journey/Journey'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SettingPage from '../Pages/SettingPage/SettingPage'
import ContactUs from '../Pages/ContactUs/ContactUs'

/** Development Pages only */
import UserList from '../DevPages/UserList/UserList'

/** Components */
import NavbarLte from '../../components/Navbar/NavbarLte'
import Map from '../../components/Map/Map'
import SidebarLte from '../../components/Sidebar/SidebarLte'
import ChatsBody from '../../components/Chats/ChatsBody'
import Footer from '../../components/Footer/Footer'
import { AddPost } from '../../components/Post/AddPost'
import TipsAndTricks from '../Pages/TipsAndTricks/TipsAndTricks'
import Category from '../Pages/Category/Category'

const App = () => {
    axios.defaults.withCredentials = true

    return (
        <Router>
            <Switch>
                <div className='wrapper'>
                    {/* <Loader /> */}
                    {/* Register Page */}
                    <Route path='/register' component={Register} />

                    {/* Login Page */}
                    <Route path='/login' component={Login} />

                    {/* User List Page */}
                    <Route path='/user-list' component={UserList} />

                    {/* Category Page */}
                    <Route path='/category'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Category />
                            <Footer />
                        </div>
                    </Route>

                    {/* Contact Us Page */}
                    <Route exact path='/contact-us'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <ContactUs />
                            <Footer />
                        </div>
                    </Route>

                    {/* Dashboard Page */}
                    <Route path='/dashboard'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Dashboard />
                            <Footer />
                        </div>
                    </Route>

                    {/* Gallery Page */}
                    <Route path='/gallery'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Gallery />
                            <Footer />
                        </div>
                    </Route>

                    {/* Home Page */}
                    <Route exact path='/'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Home />
                            <Footer />
                        </div>
                    </Route>

                    {/* Journey Page */}
                    <Route path='/journey'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Journey />
                            <Footer />
                        </div>
                    </Route>

                    {/* Tips And Tricks Page */}
                    <Route path='/tips-and-tricks'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <TipsAndTricks />
                            <Footer />
                        </div>
                    </Route>

                    {/* Map Page */}
                    <Route exact path='/map'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper'>
                            <Map />
                            <Footer />
                        </div>
                    </Route>

                    {/* Chats Page */}
                    <Route path='/chats'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper position-relative'>
                            <ChatsBody />
                            <Footer />
                        </div>
                    </Route>

                    {/* Add Post Page */}
                    <Route path='/add-post'>
                        <NavbarLte />
                        <SidebarLte />
                        <div className='content-wrapper position-relative'>
                            <AddPost />
                            <Footer />
                        </div>
                    </Route>

                    {/* Router not found */}
                    <Route path='/404' exact component={PageNotFound} />

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

export default App
