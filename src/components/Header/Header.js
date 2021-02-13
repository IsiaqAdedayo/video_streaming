import React, { useState } from 'react';
import "./Header.css"
import { connect } from 'react-redux';
import fetchSearchData from '../../redux/search/searchActions'


const Header = ({fetchSearchData}) => {

    const [query, setQuery] = useState('')
    
    const handleChange = e => {
        e.preventDefault()
        setQuery(e.target.value)
        fetchSearchData(query)
    }

    return (
        <div className="header">
            <div className="header__left">
                <i className="fas fa-2x fa-play header__leftLogo"></i>
                <h4>Following</h4>
                <h4>Browse</h4>
                <div className="vertical_line"></div>
                <h4>Esport</h4>
                <h4>Music</h4>
                <i className="fas fa-ellipsis-h ellipsis"></i>
            </div>

            <div className="header__center">
                <input type="text" placeholder="Search..." 
                    value={query}
                    onChange={handleChange}
                />
                <div className="headerCenterContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="header__right">
                <div className="headerRightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comment-alt"></i>
                    

                    <div className="headerRightBits">
                        <i className="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>

                    <i className="fas fa-2x fa-user-circle user"></i>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return{
        fetchSearchData: (query) => dispatch(fetchSearchData(query))
    }
}


export default connect(null, mapDispatchToProps)(Header);
