import { SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_PENDING} from "./searchActions"

const initialSearchState = {
    loading: false,
    data: [],
    error: null
}

const searchReducer = ( state = initialSearchState, action) => {
    switch(action.type){
        case SEARCH_PENDING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case SEARCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}


export default searchReducer;