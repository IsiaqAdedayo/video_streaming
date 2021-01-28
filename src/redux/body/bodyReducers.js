import { BODY_STREAMS_SUCCESS, BODY_STREAMS_ERROR, BODY_STREAMS_PENDING, BODY_SELECTED_STREAM } from './bodyActions';

const initialBodyState = {
    loading: false,
    data: [],
    error: null,
    selectedStream: null,
}

const bodyReducer = ( state = initialBodyState, action) => {
    switch(action.type){
        case BODY_STREAMS_PENDING:
            return{
                ...state,
                loading: true
            }
        case BODY_STREAMS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case BODY_SELECTED_STREAM:
            return {
                ...state,
                selectedStream: action.payload
            }
        case BODY_STREAMS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getBodyStreamPending = state => state.loading;
export const getBodyStream = state => state.data;
export const getBodyStreamError = state => state.error;
export const getSelectedStream = state => state.selectedStream;


export default bodyReducer;