import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';
import { useSelector, useDispatch } from 'react-redux';
import { closeApplication } from '../actions';

export default function Application({ name, body, toggle}) {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    
    const [appPosition, setAppPosition] = useState({ x: 20, y: 20 })
    const [appDimensions, setAppDimensions] = useState({
        width: 600,
        height: 400, })
    

    function closeWindow() {
        dispatch(closeApplication(name));
        toggle();
    }


    function movedWindow(e) {
        if (e.clientY < 0) {
            setAppPosition({x: e.clientX / 2, y:0})
        }
        else {
            setAppPosition(null)
        }
    }

    function fullscreen() {
        console.log("enteeredfddf  ");
        var w = window.innerWidth;
        var h = window.innerHeight;
        setAppDimensions({
            width: w,
            height: h
        })
    }

    return (
        <Draggable handle=".handle" position={appPosition} defaultPosition={appPosition} onStop={movedWindow}>
            <div className={"app glassy " + theme}>
                <TopBar closeWindow={closeWindow} name={name} theme={theme} fullscreen={fullscreen}/>
                <Resizable
                    defaultSize={appDimensions}
                    size={appDimensions}
                    onResizeStop={(e, direction, ref, d) => {
                    setAppDimensions({
                        width: appDimensions.width + d.width,
                        height: appDimensions.height + d.height,
                    });
                }}>
                    <div className="app-body">
                        {body}
                    </div>
                </Resizable>
            </div>
        </Draggable>

    )
}
