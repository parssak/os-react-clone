import React from 'react'
import UserBubble from '../helperComponents/Messages/UserBubble';
import "../styles/apps/Messages.scss";


export default function Messages() {
    return (
        <div className="messages">
            <div className="users bleft">
                <UserBubble />
                <UserBubble />
                <UserBubble />
                <UserBubble />
                <UserBubble />
            </div>
            <div className="content bright">
                This is the content
            </div>
        </div>
    )
}
