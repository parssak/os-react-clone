import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';




export default function Application({ name, closeApp,body }) {
    console.log("HELLO");
    function closeWindow() {
        console.log("closing", name);
        closeApp(name);
    }

    return (
        <Draggable handle=".handle">
            <div className="app">
                <TopBar closeWindow={closeWindow} name={name}/>
                <Resizable defaultSize={{
                    width: 320,
                    height: 200,
                }}>
                    {body}
                </Resizable>
            </div>
        </Draggable>

    )
}
