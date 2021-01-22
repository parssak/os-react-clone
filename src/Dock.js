import React from 'react'
import AppShortcut from './AppShortcut'

export default function Dock() {
    return (
        <div className="dock">
            <AppShortcut name="firefox" color='#ff4500'/>
            <AppShortcut name="spotify" color='limegreen'/>
            <AppShortcut name="vscode" color='lightblue'/>
            <AppShortcut name="messages" color='green'/>
        </div>
    )
}
