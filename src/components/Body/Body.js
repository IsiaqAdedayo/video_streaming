import React, { useEffect } from 'react'
import "./Body.css"
import Profile from '../Profile/Profile';
import Stream from '../Stream/Stream';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/body/bodyActions'
import Chat from '../Chat/Chat';

const Body = ({data , fetchData}) => {

    useEffect(() => {
        fetchData()
    },[fetchData])
    

    return (
        <div className="body">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>


            <div className="body_left">
                <div className="body_left_container">
                    {
                        data && data.streams && data.streams.slice(0,1).map(stream => <Stream stream = {stream} key={stream._id} />)
                    }
                    <div className="body_chat">
                        <Chat />
                    </div>
                </div>
                <Profile />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.bodyReducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);