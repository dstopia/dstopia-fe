import { createSlice } from '@reduxjs/toolkit'

const login = (state, action) => {
    // get prev state and set new state from payload
    state.value = action.payload
}

const userSlice = createSlice({
    // state name
    name: 'user',
    initialState: {
        value: {
            id: '',
            name: '',
            email: '',
        },
    },
    // function to change state value
    reducers: {
        login
    },
})

export default userSlice
