import React from 'react'

export default function UserBubble({ name = "Bob", clicked, user }) {
    return (
        <div className="user-bubble" onClick={() => clicked(user)}>
            <div className="icon"></div> 
            <div className="nametag">
                {name}
            </div>
        </div>
    )
}
