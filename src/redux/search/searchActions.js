import axios from 'axios';

export const SEARCH_PENDING = "SEARCH_PENDING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";

const searchPending = () => {
    return {
        type: SEARCH_PENDING
    }
}

const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        payload: data
    }
}

const searchError = (error) => {
    return {
        type: SEARCH_ERROR,
        payload: error
    }
}

const fetchSearchData = (query) => {
    return dispatch => {
        dispatch(searchPending())
        axios.get(`https://api.twitch.tv/kraken/search/streams?query=${query}`,{
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-Id': `${process.env.REACT_APP_CLIENT_ID}`
            }
        })
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(searchSuccess(res.data))
            return res.data;
        })
        .catch(error => {
            dispatch(searchError(error))
        })
    }
}


export default fetchSearchData;