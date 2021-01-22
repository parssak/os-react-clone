import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';




export default function Application({ name, closeApp }) {
    console.log("HELLO");
    function closeWindow() {
        console.log("closing", name);
        closeApp(name);
    }

    return (
        <Draggable handle=".handle">
            <div className="app">
                <TopBar closeWindow={closeWindow} />
                <Resizable defaultSize={{
                    width: 320,
                    height: 200,
                }}>
                    {name}
                </Resizable>
            </div>
        </Draggable>

    )
}
