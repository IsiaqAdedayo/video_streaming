import React from 'react'
import "./RecentItem.css"
import { connect } from 'react-redux';
import { bodySelectedStream } from '../../redux/body/bodyActions';

const RecentItem = ({ stream, selectStream }) => {

    return (
        <div className="items" onClick = { () => selectStream(stream)}>
            <div className="item__image">
                 <img src={stream.preview.medium} alt={stream.channel.name}/>
            </div>

            <div className='item__details'>
                <img src={stream.channel.logo} alt={stream.channel.name}></img>
                <div className='item__detailsText'>
                    <div>
                        <p className="name">{stream.channel.name}</p>
                        <p className="game">{stream.channel.game}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        selectStream: (stream) => dispatch(bodySelectedStream(stream))
    }
}

export default connect(null, mapDispatchToProps)(RecentItem);
