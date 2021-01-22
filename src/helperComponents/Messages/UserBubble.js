import React from 'react'

export default function UserBubble({name="Bob"}) {
    return (
        <div className="user-bubble">
            <div className="icon">

            </div>
            <div className="nametag">
                {name}
            </div>
        </div>
    )
}
