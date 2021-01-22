import React from 'react'

export default function UserBubble({ name = "Bob", clicked, user, isSelected }) {
    let currentSelected = isSelected === user ? "selected" : "";
    console.log(name, currentSelected);
    return (
        <div className={"user-bubble "+ currentSelected} onClick={() => clicked(user)}>
            <div className="icon">
                {name.charAt(0)}
            </div> 
            <div className="nametag">
                {name}
            </div>
        </div>
    )
}
