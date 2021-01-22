import React from 'react'
import AppShortcut from './AppShortcut'


export default function Dock({ addToView, catalogue }) {
    function openApplication(name) {
        console.log("DOCK CLICKED", name);
        addToView(name)
    }

    return (
        <div className="dock">
            {catalogue.map((e) => (
                <AppShortcut
                    name={e.name}
                    color={e.color}
                    openApp={openApplication}
                    key={e.name + e.color}
                />))}
        </div>
    )
}
