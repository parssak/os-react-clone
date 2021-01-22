import React from 'react'

export default function TopBar({closeWindow}) {
    return (
        <div className="top-bar handle">
            <div className="exit" onClick={() => closeWindow()}>
                X
                    </div>
            <div className="minimize">
                -
                    </div>
            <div className="maximize">
                +
                    </div>
        </div>
    )
}
