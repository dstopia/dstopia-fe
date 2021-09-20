import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/** Components */
import Home from './containers/Home/Home.js'

/** default Global state */
const globalState = {
    user: 'Dani',
}

/** Reducer */
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'GREET_USER':
            return {
                ...globalState,
                user: `Hello ${state.user}`
            }
        default:
            return state
    }
}

/** Global Store */
const store = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
