import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/** Bootstraps */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

/** Admin-Lte */
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

/** Font Awesome */
import '@fortawesome/fontawesome-free/css/all.min.css'

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
