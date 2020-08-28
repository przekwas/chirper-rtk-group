import { combineReducers } from 'redux';
import chirpsReducer from '../features/chirps/chirpsSlice';

export default combineReducers({
    chirps: chirpsReducer
});