import React, { useState } from 'react'
import UserBubble from '../helper-components/Messages/UserBubble';
import { Contacts } from '../data/Contacts';
import "../styles/apps/Messages.scss";
import { useSelector } from 'react-redux';


export default function Messages() {
    const theme = useSelector(state => state.theme);
    const [selectedUser, setSelectedUser] = useState(Contacts[0]);

    function clickedUser(e) {
        if (selectedUser === null || selectedUser.name !== e.name) {
            console.log("changed user", e);
            setSelectedUser(e);
        }
    }

    return (
        <div className={"messages " + theme}>

            <div className="users bleft">
                    {Contacts.map((e) => (
                        <UserBubble
                            name={e.name}
                            key={e.name}
                            clicked={clickedUser} user={e}
                            isSelected={selectedUser} />))}
            </div>

            <div className={"content bright "+ theme}>
                {selectedUser &&
                    <>
                        <div className="to">{selectedUser.name}</div>
                        <div className="thread">

                        </div>
                    </>}
            </div>
        </div>
    )
}
