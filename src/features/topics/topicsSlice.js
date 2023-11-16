// Code to manage the state associated with topics.
// The state is stored in a topics slice of the Redux store.

import { createSlice } from '@reduxjs/toolkit';
//import { current } from '@reduxjs/toolkit';
//import quizzesSlice from '../quizzes/quizzesSlice.js';
import { addQuiz } from '../quizzes/quizzesSlice.js';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {

        addTopic: (state, action) => {
            // log the state before the update
            //console.log("State before adding topic:", current(state));
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: [],
            };
            // log the state after the update
            //console.log("State after adding topic:", current(state));
        },
    },

    extraReducers: {
        [addQuiz]: (state, action) => { // Use the action directly
            const { id, topicId } = action.payload;
            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id);
            }
        },
    },

});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;