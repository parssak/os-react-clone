import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';
import { useSelector } from 'react-redux';

export default function Application({ name, closeApp, body}) {
    const theme = useSelector(state => state.theme);

    function closeWindow() {
        closeApp(name);
    }

    return (
        <Draggable handle=".handle">
            <div className={"app glassy " + theme}>
                <TopBar closeWindow={closeWindow} name={name} theme={theme} />
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
