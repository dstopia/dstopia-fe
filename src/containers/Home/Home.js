import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import Category from '../Pages/Category/Category'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                <button onClick={this.props.greet}>button</button>
                <div>{this.props.user}</div>
                <Router>
                    <Route path='/category' component={Category} />
                </Router>
            </div>
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
