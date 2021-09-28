import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
            id: '',
            name: '',
            email: '',
        }
const login = (state, action) => {
    // get prev state and set new state from payload
    state.value = action.payload // payload is an object or some information to change the state
}

const logout = (state) => {
    state.value = initialStateValue
}

export const userSlice = createSlice({
    // state name
    name: 'user',
    initialState: {
        value: initialStateValue
    },
    // function to change state value
    reducers: {
        login,
        logout
    },
})

export const { login, logout } = userSlice.action

export default userSlice.reducer