import React, {useState} from 'react'
import { ReactTerminal } from "react-terminal";
import { useSelector, useDispatch } from 'react-redux';
import { openApplication } from '../actions';
import { Catalogue } from '../data/Catalogue';
import { toggleLight, toggleDark } from '../actions';

let root = "root"
let arrows = " >>>"

export default function Terminal() {
    const [path, setPath] = useState(root)
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    const apps = useSelector(state => state.apps);


    const commands = {
        help: help(),
        hello: "Hi there!",
        ls: "Desktop    Downloads  ...",
        cd: (directory) => cd(directory),
        open: (appName) => {
            openAPP(appName)
        },
        theme: (type) => changeTheme(type)
    };

    function changeTheme(type) {

        if (!type) dispatch(theme === 'light' ? toggleDark() : toggleLight());
        else if (type === 'light') dispatch(toggleLight());
        else if (type === 'dark') dispatch(toggleDark());

        return `Changed theme to: ${theme === 'light' ? 'dark' : 'light'}`
    }

    function help() {
        return "hello \n how are you today> \n i'll be your host \n uwu"
    }

    function cd(newLocation) {
        if (newLocation === ".") return "Didn't change directory";
        else if (newLocation === "..") {
            if (path === root) return "Already at root";
            const newPath = path.substr(0, path.lastIndexOf('/'));
            setPath(newPath);
        } else {
            setPath(path + "/"+newLocation);
        }
    }
    function openAPP(appName) {
        let chosenApp = null;
        
        Catalogue.forEach(e => {
            if (e.name === appName) {
                chosenApp = e;
            }
        })

        let alreadyOpen = false;
        apps.forEach(e => {
            if (e.name === appName) {
                alreadyOpen = true;

            }
        })
        if (alreadyOpen) return;

        if (chosenApp) {
            console.log("found!");
            const randKeyVal = (Math.random() * Math.random() + Math.random());
            chosenApp.key = appName + "terminal" + randKeyVal;
            console.log(chosenApp.key);
            dispatch(openApplication(chosenApp));
        } 
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
                prompt={path+arrows}
                theme="myCustomTheme"
            />
        </div>
    )
}
