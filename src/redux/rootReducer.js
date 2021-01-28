import { combineReducers } from 'redux';
import bodyReducer from './body/bodyReducers'
import searchReducer from './search/searchReducers'

const rootReducer = combineReducers(
    {
        bodyReducer,
        searchReducer
    }
)

export default rootReducer;