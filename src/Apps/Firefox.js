import React from 'react'
import '../styles/apps/Firefox.scss';
import { useSelector } from 'react-redux';

export default function Firefox() {
    const theme = useSelector(state => state.theme);
    
    return (
        <div className={"firefox " + theme}>
            <div className={"search-bar " + theme}>
                {/* <button className="back">B</button>
                <button className="fwd">F</button>
                <button className="refresh">R</button> */}
                <input type="search" name="search" id="firefox-search" placeholder="search here" className={"search-field " + theme}/>
            </div>
        </div>
    )
}
