import React, { useState } from 'react'
import './styles/App.scss';
import Application from './Apps/Application';
import Dock from './OsComponents/Dock';
import Firefox from './Apps/Firefox';
import Messages from './Apps/Messages';
import Spotify from './Apps/Spotify';
import Mail from './Apps/Mail';

const firefox = {
  name: "firefox",
  color: '#ff4500',
  body: <Firefox/>
}

const spotify = {
  name: "spotify",
  color: 'limegreen',
  body: <Spotify />
}
const mail = {
  name: "mail",
  color: 'lightblue',
  body: <Mail />
}
const messages = {
  name: "messages",
  color: 'green',
  body: <Messages />
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
    <Application name={app.name} key={app.key} closeApp={closeApp} body={app.body}/>));
  return (
    <div className="os">
      {renderApps}
      <Dock addToView={openApp} catalogue={catalogue}/>
    </div>
  );
}

export default App;
