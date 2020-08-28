import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const chirpsSlice = createSlice({
    name: 'chirps',
    initialState: [],
    reducers: {
        addChirp: {
            reducer(state, action) {
                const { user, message } = action.payload;
                state.push({ id: uuidv4(), user, message, _created: Date.now() });
            }
        }
    }
});

export const { addChirp } = chirpsSlice.actions;

export default chirpsSlice.reducer;