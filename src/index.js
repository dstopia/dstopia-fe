import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/** Global Store */
import store from './redux/globalStore.js'

/** Font Awesome */
import '@fortawesome/fontawesome-free/css/all.min.css'

/** Bootstraps */

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

/** Admin-Lte */
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

/** Components */
import Home from './containers/Home/Home.js'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
