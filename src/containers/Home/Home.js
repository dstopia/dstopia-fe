import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chats from '../../components/Chats/Chats'

import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import Category from '../Pages/Category/Category'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                {/* <button onClick={this.props.greet}>button</button>
                <div>{this.props.user}</div> */}
                <Chats />
                <Chats />
                <Post />
                <Router>
                    <Route path='/category' component={Category} />
                </Router>
            </Fragment>
        )
    }
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
