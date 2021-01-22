import React from 'react'

export default function AppShortcut({name, color}) {
    return (
        <div className="app-shortcut" >
            <div className="icon" style={{ backgroundColor: color }}></div>
            {name}
        </div>
    )
}
