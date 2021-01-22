import React from 'react'
import AppShortcut from './AppShortcut'


export default function Dock({addToView, catalogue}) {

    function openApplication(name) {
        console.log("DOCK CLICKED", name);
        addToView(name)
    }

    return (
        <div className="dock">
            {
                catalogue.map((e) => (
                    <AppShortcut name={e.name} color={e.color} openApp={openApplication} />
                ))
            }
            {/* <AppShortcut name="spotify" color='limegreen' openApp={openApplication}/> */}
            {/* <AppShortcut name="vscode" color='lightblue' openApp={openApplication}/> */}
            {/* <AppShortcut name="messages" color='green' openApp={openApplication}/> */}
        </div>
    )
}
