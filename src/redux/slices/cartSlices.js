import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        home: {
            ourProgram: 1,
            questions: {
                state: false,
                id: null
            }
        }
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload)
        },

        switchDay: (state, action) => {
            state.home.ourProgram = action.payload
        },

        questionsState: (state, action) => {
            state.home.questions.state = action.payload.state;
            state.home.questions.id = action.payload.id;
        }
    }
})

export const {addToCart, switchDay, questionsState} = cartSlice.actions
export default cartSlice.reducer    