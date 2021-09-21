import { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

/** Components */
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import ChatsBody from '../../components/Chats/ChatsBody'
// import Category from '../Pages/Category/Category'

function Home() {
    return (
            <Fragment>
                <Navbar />
                <Router>
                    <Route path='/' exact component={Post} />
                    <Route path='/chats' component={ChatsBody} />
                </Router>
            </Fragment>
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
        greet: () => dispatch({type:'GREET_USER'})
    }
}
export default connect(mapStateToProos, mapDispatchToProps)(Home)
