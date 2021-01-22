import React from 'react'
import '../styles/apps/Firefox.scss';

export default function Firefox() {
    return (
        <div className="firefox">
            <div className="search-bar">
                <input type="search" name="search" id="firefox-search" placeholder="search here"/>
            </div>
        </div>
    )
}
