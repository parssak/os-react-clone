import React from 'react'
import {TitleBar} from 'react-desktop/macOs';


export default function TopBar({ closeWindow, name, theme, fullscreen }) {

    function hitFullscreen() {
        console.log("hello world");
    }

    return (
        <div className="handle top-bar">
            <TitleBar
                title={name}
                controls
                onCloseClick={() => closeWindow()}
                onMaximizeClick={() => { fullscreen() }}
                onMinimizeClick={() => { fullscreen() }}
            />
        </div>
    )
}
