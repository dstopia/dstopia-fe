import { createStore } from 'redux'

/** default Global state */
const globalState = {
    user: 'Dani',
    email: 'dani@gmail.com',
}

/** Reducer */
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'GREET_USER':
            return {
                ...globalState,
                user: `Hello ${state.user}`,
            }
        default:
            return state
    }
}

/** Global Store */
const store = createStore(rootReducer)

export default store
