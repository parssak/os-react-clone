import React from 'react'
import AppShortcut from './AppShortcut'
import { useSelector } from 'react-redux';

export default function Dock({ addToView, catalogue }) {

    const theme = useSelector(state => state.theme);

    function openApplication(name) {
        addToView(name)
    }

    return (
        <div className="dock">
            <div className={"contents glassy " + theme}>
                {catalogue.map((e) => (
                    <AppShortcut
                        name={e.name}
                        color={e.color}
                        openApp={openApplication}
                        key={e.name + e.color}
                        image={e.image}
                    />))}
            </div>
           
        </div>
    )
}
