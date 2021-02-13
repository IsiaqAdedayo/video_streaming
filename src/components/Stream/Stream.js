import React from 'react'
import "./Stream.css"
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import { connect } from 'react-redux';

const Stream = ({stream, selectedStream}) => {

    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__videoEmbed">
                {
                    selectedStream ? (
                        <ReactTwitchEmbedVideo 
                        channel={selectedStream.channel.name} 
                        width={`160%`} 
                        height={`150%`}
                        layout='video' />
                    ):(
                        <ReactTwitchEmbedVideo 
                        channel={stream.channel.name} 
                        width={`160%`} 
                        height={`150%`} 
                        layout='video' />
                    )
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        selectedStream: state.bodyReducer.selectedStream
    }
}


export default connect(mapStateToProps)(Stream);
