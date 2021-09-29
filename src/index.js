import React from 'react'
import ReactDOM from 'react-dom'

/** Font Awesome */
import '@fortawesome/fontawesome-free/css/all.min.css'

/** Bootstraps */
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

/** Admin-Lte */
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

/** Components */
import App from './containers/App/App.js'

/** Redux */
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user'

const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
