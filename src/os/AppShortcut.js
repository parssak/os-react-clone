import React from 'react'

export default function AppShortcut({ name, color, openApp, image }) {
    
    function clicked(e) {
        console.log("CLICKED", e);
        openApp(name);
    }

    return (
        <div className="app-shortcut" onClick={clicked}>
            <div className="icon">
                <img src={image} alt=""></img>
            </div>
            {/* {name} */}
        </div>
    )
}
