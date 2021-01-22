import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';
// import { Res}


export default function Application() {
    return (
        
        <Draggable handle=".handle">
        <div className="app">
                <TopBar/>
                <Resizable>
                hello
                </Resizable>
            </div>
        </Draggable>
            
    )
}
