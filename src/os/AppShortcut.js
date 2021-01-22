import React from 'react'

export default function AppShortcut({ name, color, openApp }) {
    
    function clicked(e) {
        console.log("CLICKED", e);
        openApp(name);
    }

    return (
        <div className="app-shortcut" onClick={clicked}>
            <div className="icon" style={{ backgroundColor: color }}></div>
            {name}
        </div>
    )
}
