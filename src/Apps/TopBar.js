import React from 'react'

export default function TopBar({ closeWindow, name, theme }) {
    return (
        <div className={"top-bar handle " + theme}>
            <div className="exit" onClick={() => closeWindow()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
            <div className="minimize">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <div className="maximize">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            <div className="barName">{name}</div>
        </div>
    )
}
