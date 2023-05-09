import { createSlice } from '@reduxjs/toolkit';


export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        chosenColor: 'red',
    },
    reducers: {
        setColor: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.chosenColor = action.payload;
            console.log("Setting state to: ", state.chosenColor);
        },
    },
})

// Action creators are generated for each case reducer function
export const { setColor } = colorSlice.actions

export default colorSlice.reducer