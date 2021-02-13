import React from 'react'
import "./Profile.css"
import RecentItem from "../RecentItem/RecentItem"
import { connect } from 'react-redux';

const Profile = ({data}) => {

    return (
        <div className="profile">
            <div className="profile__menu">
                <h2 className="active">Recent Broadcasts</h2>
            </div>
            <div className="profile__recent">
                <div className="profile__recentItems">
                    {
                        data && data.streams && data.streams.slice(0,4).map(stream => <RecentItem stream={stream} key={stream._id} />) 
                    }
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        data: state.bodyReducer.data
    }
}


export default connect(mapStateToProps)(Profile);
