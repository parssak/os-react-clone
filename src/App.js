import React, { useState } from 'react'
import './App.scss';
import Application from './Application';
import Dock from './Dock';


const firefox = {
  name: "firefox",
  color: '#ff4500'
}

const spotify = {
  name: "spotify",
  color: 'limegreen'
}
const mail = {
  name: "mail",
  color: 'lightblue'
}
const messages = {
  name: "messages",
  color: 'green'
}

const catalogue = [firefox, spotify, mail, messages]


function App() {
  const [apps, setApps] = useState([]);
  const [toggler, settoggler] = useState(false);

  function openApp(appName) {
    let wasCaught = false;
    apps.forEach(e => {
      if (e.name === appName) {
        console.log("caught:", e);
        wasCaught = true;
        
      }
    })
    if (wasCaught) return;
    addAppToView(appName);
  }

  function addAppToView(appName) {
    let newApp = null;
    catalogue.forEach(e => {
      if (e.name === appName) {
        newApp = e;
      }
    })

    if (newApp === null) return;
    newApp.key = 'app-window' + apps.length
    setApps([...apps, newApp]);
  }

  function closeApp(appName) {
    let index = 0;
    let appIndex = -1;
    apps.forEach(e => {
      if (e.name === appName) {
        appIndex = index;
      }
      index++;
    })
    if (index !== -1) {
      let allApps = apps;
      allApps.splice(appIndex, 1);
      setApps(allApps);
    }
    settoggler(!toggler);
  }
  let renderApps = apps.map(app => (
    <Application name={app.name} key={app.key} closeApp={closeApp} />));
  return (
    <div className="os">
      {renderApps}
      <Dock addToView={openApp} catalogue={catalogue}/>
    </div>
  );
}

export default App;
