import React, {useState} from 'react'
import { ReactTerminal } from "react-terminal";
import { useSelector, useDispatch } from 'react-redux';
import { openApplication } from '../actions';
import { Catalogue } from '../data/Catalogue';

let root = "root"
let arrows = " >>>"

export default function Terminal() {
    const [path, setPath] = useState(root)
    const dispatch = useDispatch();
    const commands = {
        hello: "Hi there!",
        ls: "Desktop    Downloads  ...",
        cd: (directory) => cd(directory),
        open: (appName) => {
            openAPP(appName)
        }
    };

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
