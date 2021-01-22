import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';

export default function Application({ name, closeApp, body }) {
    function closeWindow() {
        closeApp(name);
    }

    return (
        <Draggable handle=".handle">
            <div className="app">
                <TopBar closeWindow={closeWindow} name={name} />
                <Resizable defaultSize={{
                    width: 500,
                    height: 350,
                }}>
                    <div className="app-body">
                        {body}
                    </div>
                </Resizable>
            </div>
        </Draggable>

    )
}
