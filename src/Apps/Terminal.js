import React from 'react'
import { ReactTerminal } from "react-terminal";
import { useSelector, useDispatch } from 'react-redux';
import { openApp } from '../actions';

export default function Terminal() {
    const dispatch = useDispatch();

    const commands = {
        ls: "Desktop    Downloads  ...",
        cd: (directory) => `changed path to ${directory}`,
        open: (appName) => {
            // `opening ${appName}`;
            openAPP(appName)
        }
    };
    function openAPP(appName) {
        console.log("OPENING APPPPPPP", appName);
        dispatch(openApp(appName));

    }
    return (
        <div>
            <ReactTerminal
                commands={commands}
                showControlButtons={false}
                themes={{
                    myCustomTheme: {
                    }
                }}
                theme="myCustomTheme"
            />
        </div>
    )
}
