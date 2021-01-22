import { useSelector } from 'react-redux';
import React from 'react'

export default function UserBubble({ name = "Bob", clicked, user, isSelected }) {
    let currentSelected = isSelected === user ? "selected" : "";
    const theme = useSelector(state => state.theme);

    console.log(name, currentSelected);
    return (
        <div className={"user-bubble "+ currentSelected + " "+theme} onClick={() => clicked(user)}>
            <div className="icon">
                {name.charAt(0)}
            </div> 
            <div className="nametag">
                {name}
            </div>
        </div>
    )
}
