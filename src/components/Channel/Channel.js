import React from 'react'
import "./Channel.css"
import { connect } from 'react-redux';
import { bodySelectedStream } from '../../redux/body/bodyActions';

const Channel = ({stream, selectStream}) => {

    return (
        <div className="channel"  onClick = { () => selectStream(stream)}>
            <div className="channel__details">
                <img src={stream.channel.profile_banner ? stream.channel.profile_banner : `https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg`} alt={stream.channel.name} />
                <div className="channel__names">
                    <p className="name">{stream.channel.name}</p>
                    <p className="game">{stream.channel.game}</p>
                </div>
            </div>
            <p><i style={{color:"red"}} className="fas fa-circle circle"></i></p>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        selectStream: (stream) => dispatch(bodySelectedStream(stream))
    }
}

export default connect(null, mapDispatchToProps)(Channel);