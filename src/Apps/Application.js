import React from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import TopBar from './TopBar';
import { useSelector, useDispatch } from 'react-redux';
import { closeApplication } from '../actions';

export default function Application({ name, body, toggle}) {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    function closeWindow() {
        dispatch(closeApplication(name));
        toggle();
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
