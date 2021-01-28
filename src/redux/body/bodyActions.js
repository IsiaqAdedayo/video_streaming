import axios from 'axios';

export const BODY_STREAMS_PENDING = "BODY_STREAMS_PENDING";
export const BODY_STREAMS_SUCCESS = "BODY_STREAMS_SUCCESS";
export const BODY_STREAMS_ERROR = "BODY_STREAMS_ERROR";
export const BODY_SELECTED_STREAM = "BODY_SELECTED_STREAM";

const bodyStreamPending = () => {
    return {
        type: BODY_STREAMS_PENDING
    }
}

const bodyStreamSuccess = (data) => {
    return {
        type: BODY_STREAMS_SUCCESS,
        payload: data
    }
}

const bodyStreamError = (error) => {
    return {
        type: BODY_STREAMS_ERROR,
        payload: error
    }
}

const bodySelectedStream = (stream) => {
    return {
        type: BODY_SELECTED_STREAM,
        payload: stream
    }
}

const fetchData = () => {
    return dispatch => {
        dispatch(bodyStreamPending())
        axios.get('https://api.twitch.tv/kraken/streams/', {
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-Id': `${process.env.REACT_APP_CLIENT_ID}`
            }
        })
        .then(res => {
                if(res.error){
                    throw(res.error);
                }
            dispatch(bodyStreamSuccess(res.data))
            
            return res.data;
        })
        .catch(error => {
            dispatch(bodyStreamError(error))
        })
    }
}

export {fetchData, bodySelectedStream};


