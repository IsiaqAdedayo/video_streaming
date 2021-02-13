import React, { useEffect } from 'react';
import Channel from "../Channel/Channel";
import "./Sidebar.css";
import { connect } from 'react-redux';
import {fetchData} from '../../redux/body/bodyActions';


const Sidebar = ({data, fetchData, searchData}) => {

    useEffect(() => {
        fetchData()
    },[fetchData])


    return (
        <div className="sidebar">
           <div className="sidebar__top">
           <h5>RECOMMENDED CHANNELS</h5>
            <div className="sidebar__channels">
                { 
                    searchData && searchData.streams ? (
                        searchData.streams.slice(0,10).map(stream => 
                        <Channel 
                        stream={stream} 
                        key={stream._id}/>)
                    ):(
                        data && data.streams && data.streams.slice(0,10).map(stream => 
                        <Channel 
                        stream={stream} 
                        key={stream._id}/>) 
                    )  
                }  
            </div>     
           </div> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        data: state.bodyReducer.data,
        searchData: state.searchReducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
